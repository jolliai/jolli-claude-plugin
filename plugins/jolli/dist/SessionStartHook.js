#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var wi=Object.create;var He=Object.defineProperty;var Ai=Object.getOwnPropertyDescriptor;var Ni=Object.getOwnPropertyNames;var Di=Object.getPrototypeOf,Ii=Object.prototype.hasOwnProperty;var u=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var mt=(e,t)=>{for(var n in t)He(e,n,{get:t[n],enumerable:!0})},vn=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ni(t))!Ii.call(e,o)&&o!==n&&He(e,o,{get:()=>t[o],enumerable:!(r=Ai(t,o))||r.enumerable});return e};var Pn=(e,t,n)=>(n=e!=null?wi(Di(e)):{},vn(t||!e||!e.__esModule?He(n,"default",{value:e,enumerable:!0}):n,e)),xi=e=>vn(He({},"__esModule",{value:!0}),e);function ft(){return"claude-plugin"}var pt,gt=u(()=>{"use strict";pt="claude-plugin/1.0.6"});function Ue(e,t){let n=ye(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function ye(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function ee(e){return e.replace(/\\/g,"/")}var $=u(()=>{"use strict"});function vi(e){return ki.some(t=>(e[t]??"")!=="")}function te(e){try{return(0,ae.readFileSync)(e,"utf-8")}catch{return null}}function ht(e){try{return(0,ae.realpathSync)(e)}catch{return(0,D.resolve)(e)}}function $e(e){try{return(0,ae.statSync)(e).isDirectory()}catch{return!1}}function Hn(e,t){let n=te((0,D.join)(e,"HEAD"))?.trim();return!n||!(je.test(n)||Pi.test(n))?!1:$e((0,D.join)(t,"objects"))&&$e((0,D.join)(t,"refs"))}function Mi(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,D.isAbsolute)(o)?o:(0,D.resolve)(e,o);return $e(s)?n?ht(s):s:null}function Un(e,t){let n=te((0,D.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,D.isAbsolute)(n)?n:(0,D.resolve)(e,n);return t?ht(r):r}function le(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(vi(n))return null;let o=r?ht(e):(0,D.resolve)(e);for(;;){let s=(0,D.join)(o,".git");if($e(s)){let l=Un(s,r);return Hn(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=te(s);if(i!==null){let l=Mi(o,i,r);if(l===null)return null;let c=Un(l,r);return Hn(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,D.dirname)(o);if(a===o)return null;o=a}}function $n(e){let t=te((0,D.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function Hi(e){return Fi.test(e)&&!e.split("/").includes("..")}function Ui(e,t){let n=te((0,D.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let s=r.slice(0,o).trim();return je.test(s)?s:null}}return null}function jn(e){let t=te((0,D.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(je.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!Hi(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let s=te((0,D.join)(o,r))?.trim();if(s&&je.test(s))return s;let i=Ui(o,r);if(i)return i}return null}var ae,D,ki,je,Pi,Fi,We=u(()=>{"use strict";ae=require("node:fs"),D=require("node:path");$();ki=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];je=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,Pi=/^ref:\s*refs\//;Fi=/^refs\/[A-Za-z0-9._\-/]+$/});function Bn(){return $i.getStore()?.traceId}var Wn,yd,$i,Gn=u(()=>{"use strict";Wn=require("node:async_hooks"),yd="0".repeat(32),$i=new Wn.AsyncLocalStorage});function A(e){return e instanceof Error?e.message:String(e)}function yt(e){return e instanceof Error&&e.code==="ENOENT"}function Jn(e){qn=e}function de(){return Yn}function qi(e,t){let n=Ki[t]??Gi;return Kn[e]>=Kn[n]}function Ji(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=r.length)return d;let p=r[l++];return d==="%d"?String(Number(p)):d==="%j"?JSON.stringify(p):String(p)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function M(e){let t=e??qn??process.cwd();return(0,ce.join)(t,ji,Wi)}function _e(e){return String(e).padStart(2,"0")}async function Qi(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${_e(n.getUTCMonth()+1)}-${_e(n.getUTCDate())}_${_e(n.getUTCHours())}-${_e(n.getUTCMinutes())}-${_e(n.getUTCSeconds())}`;try{let o=(0,ce.join)(e,`debug_${r}.log`);for(let s=1;await Zi(o);s++)o=(0,ce.join)(e,`debug_${r}_${s}.log`);await(0,k.rename)(t,o)}catch{return}try{let o=(await(0,k.readdir)(e)).filter(s=>zi.test(s)).sort();for(let s=0;s<o.length-Vi;s++)await(0,k.unlink)((0,ce.join)(e,o[s])).catch(()=>{})}catch{}}async function Zi(e){try{return await(0,k.stat)(e),!0}catch{return!1}}function ea(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Yn||(Xn=Xn.then(async()=>{try{let t=M(),n=(0,ce.join)(t,Bi);await(0,k.stat)(t);try{(await(0,k.stat)(n)).size>Yi&&await Qi(t,n)}catch{}await(0,k.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function f(e){function t(n,r,o){let s=Ji(n,e,r,o,Bn());Xi&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),qi(n,e)&&ea(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var k,ce,ji,Wi,Bi,X,qn,Yn,Kn,Gi,Ki,Xi,Xn,Yi,Vi,zi,S=u(()=>{"use strict";k=require("node:fs/promises"),ce=require("node:path");Gn();ji=".jolli",Wi="jollimemory",Bi="debug.log";X="jollimemory/summaries/v3";Yn=!1;Kn={debug:0,info:1,warn:2,error:3},Gi="info",Ki={},Xi=!0;Xn=Promise.resolve(),Yi=2*1024*1024,Vi=10,zi=/^debug_.*\.log$/});function Ge(e,t,n){return(0,Vn.promisify)(q.execFile)(e,t,{...Be,...n??{}})}function j(e,t,n){return(0,q.execFileSync)(e,t,{...Be,...n??{}})}var q,Vn,Be,ne,W=u(()=>{"use strict";q=require("node:child_process"),Vn=require("node:util"),Be={windowsHide:!0};ne=((e,t,n)=>Array.isArray(t)?(0,q.spawn)(e,t,{...Be,...n??{}}):(0,q.spawn)(e,{...Be,...t??{}}))});function sa(){let e={...process.env,LC_ALL:"C"};for(let t of oa)delete e[t];return e}function er(e){return ia(e)??e}function ia(e){let t=_t.get(e);if(t!==void 0)return t;let n=le(e,{realpath:!0})?.worktreeRoot;if(n){let o=ee(n);return _t.set(e,o),o}let r=null;try{let o=j("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:sa(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return _t.set(e,r),r}async function O(e,t){I.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await Ge("git",e,{maxBuffer:na,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return I.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}async function Et(e,t){return(await O(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function St(e,t){if(await Et(e,t))return;I.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await da(n,t);I.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,s=await pa(o,t);I.debug("Created tree: %s",s);let i=await O(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],t);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();I.debug("Created commit: %s",a);let l=await O(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);I.info("Orphan branch '%s' created successfully",e)}function la(e){let t=e.toLowerCase();return aa.some(n=>t.includes(n))}async function Tt(e,t,n){I.debug("Reading file from branch: %s:%s",e,t);let r=await O(["show",`${e}:${t}`],n);return r.exitCode!==0?(la(r.stderr)?I.debug("File not found: %s:%s",e,t):I.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function bt(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return I.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((s,i)=>{let a=ne("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),d=!0,p=0,g=[],_=!1,h=0,m=!1,E=y=>{m||(m=!0,y?i(y):s(r))};a.stderr.on("data",y=>{l+=y.toString()}),a.stdout.on("data",y=>{for(c=Buffer.concat([c,y]);!m;){if(d){let R=c.indexOf(10);if(R<0)return;let x=c.subarray(0,R).toString("utf8");if(c=c.subarray(R+1),h>=t.length){E(new Error(`git cat-file --batch returned extra response: ${x}`));return}let N=t[h];if(h++,x.endsWith(" missing")){r.set(N,null);continue}let K=x.substring(x.lastIndexOf(" ")+1),ut=Number.parseInt(K,10);if(!Number.isFinite(ut)||ut<0){E(new Error(`Unexpected cat-file --batch header for ${N}: ${x}`));return}p=ut,g=[],d=!1,_=!0}if(p>0){if(c.length===0)return;let R=Math.min(p,c.length);if(g.push(c.subarray(0,R)),c=c.subarray(R),p-=R,p>0)return}if(_){if(c.length<1)return;c=c.subarray(1),_=!1;let R=t[h-1];r.set(R,Buffer.concat(g).toString("utf8")),g=[],d=!0}}}),a.on("close",y=>{if(y!==0){E(new Error(`git cat-file --batch failed (exit ${y}): ${l.trim()}`));return}if(h<t.length){E(new Error(`git cat-file --batch returned ${h} of ${t.length} expected responses; stderr=${l.trim()}`));return}E(null)}),a.on("error",y=>{E(y)}),a.stdin.on("error",y=>{E(y)});for(let y of t)a.stdin.write(`${e}:${y}
`);a.stdin.end()})}async function tr(e,t,n,r){await St(e,r);let o=await O(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await ua(e,s,n,t,r);let i=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;I.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,i,a)}async function Rt(e,t,n){I.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await O(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return I.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(ra).filter(s=>s.length>0);return I.debug("Found %d files",o.length),o}async function ca(e){let t=await O(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Ee.resolve)(e,n)}async function nr(e){let t=await ca(e);return(0,Ee.dirname)(t)}async function rr(e){let t=await O(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}function or(e,t,n){return I.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let s=ne("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(t),s.stdin.end()})}async function da(e,t){return or(["hash-object","-w","--stdin"],e,t)}async function zn(e,t){let n=await O(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function ua(e,t,n,r,o){let s=await zn("GIT_AUTHOR_IDENT",o),i=await zn("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];I.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(d=>!d.delete),c=r.filter(d=>d.delete);return new Promise((d,p)=>{let g=ne("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),_="";g.stderr.on("data",y=>{_+=y.toString()}),g.on("close",y=>{y!==0?p(new Error(`git fast-import failed (exit ${y}): ${_.trim()}`)):d()}),g.on("error",y=>{p(y)});let h=g.stdin;h.on("error",y=>{p(y)});let m=[];l.forEach((y,R)=>{let x=R+1,N=Buffer.from(y.content,"utf8");m.push(`blob
mark :${x}
data ${N.length}
`,N,`
`)});let E=Buffer.from(n,"utf8");m.push(`commit refs/heads/${e}
`,`author ${s}
`,`committer ${i}
`,`data ${E.length}
`,E,`
`,`from ${t}
`),l.forEach((y,R)=>{m.push(`M 100644 :${R+1} ${Qn(y.path)}
`)});for(let y of c)m.push(`D ${Qn(y.path)}
`);m.push(`done
`),ma(h,m).then(()=>{h.end()},y=>{p(y)})})}async function ma(e,t){for(let n of t)e.write(n)||await(0,Zn.once)(e,"drain")}function Qn(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function pa(e,t){return or(["mktree"],e,t)}var Zn,Ee,na,ra,I,_t,oa,aa,J=u(()=>{"use strict";Zn=require("node:events"),Ee=require("node:path");S();W();We();$();na=10*1024*1024,ra="\0",I=f("GitOps"),_t=new Map,oa=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"];aa=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});var wt=u(()=>{"use strict"});async function ar(e,t,n){let r=`${e}.${process.pid}.${(0,ir.randomUUID)()}.tmp`;await(0,re.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,re.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,re.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,re.rm)(r,{force:!0});else throw o}}var ir,re,lr=u(()=>{"use strict";ir=require("node:crypto"),re=require("node:fs/promises")});function fa(e){return new Promise(t=>setTimeout(t,e))}function dr(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function At(e){try{let t=await(0,F.stat)(e),n=Date.now()-t.mtimeMs,r=await ur(e),o=r!==null&&!dr(r);if(!o&&n<cr)return!1;o?Se.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):Se.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,F.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return Se.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,F.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function ur(e){try{let n=(await(0,F.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function Nt(e,t){let n=await ur(e);if(n!==null&&n!==String(process.pid)){Se.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,F.rm)(e,{force:!0})}catch(r){Se.error("Failed to release %s: %s",t,r.message)}}async function Dt(e,t){if(t.timeoutMs<=0)return At(e);let n=Date.now()+t.timeoutMs;for(;;){if(await At(e))return!0;if(Date.now()>=n)return!1;await fa(t.pollMs)}}var F,Se,cr,It=u(()=>{"use strict";F=require("node:fs/promises");S();Se=f("LockPrimitives"),cr=300*1e3});var mr,Od,xt=u(()=>{"use strict";mr=require("node:async_hooks"),Od=new mr.AsyncLocalStorage});function ya(e){return Ge("git",["rev-parse","--git-common-dir"],{cwd:e})}async function Ta(e){let t=e??process.cwd(),n=fr.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await ya(t),s=o.trim(),i=(0,Y.isAbsolute)(s)?s:(0,Y.resolve)(t,s);r=(0,Y.join)(i,"jollimemory")}catch{gr.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=M(t)}return fr.set(t,r),r}async function ba(e){let t=await Ta(e);return await(0,Ke.mkdir)(t,{recursive:!0}),t}async function Ra(e,t,n,r){let o=r.timeoutMs??Sa,s=r.pollMs??hr;await(0,Ke.mkdir)(e,{recursive:!0});let i=(0,Y.join)(e,t),a=await Dt(i,{timeoutMs:o,pollMs:s});a||gr.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await Nt(i,t)}}async function yr(e,t,n={}){return Ra(e,_a,t,n)}async function _r(e,t,n={}){let r=n.timeoutMs??Ea,o=n.pollMs??hr,s=await ba(e),i=(0,Y.join)(s,pr);if(!await Dt(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Nt(i,pr)}}var Ke,Y,gr,pr,_a,Ea,hr,Sa,fr,Te=u(()=>{"use strict";Ke=require("node:fs/promises"),Y=require("node:path");S();W();It();xt();gr=f("Locks");pr="profile.lock",_a="config.lock",Ea=5e3,hr=25,Sa=5e3,fr=new Map});var be=u(()=>{"use strict"});var Er=u(()=>{"use strict"});var Sr=u(()=>{"use strict"});function Tr(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function br(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return Tr(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return Tr(o)?String.fromCodePoint(o):t}let r=wa[n];return typeof r=="string"?r:t})}var wa,Rr=u(()=>{"use strict";wa={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var Aa,Na,wr=u(()=>{"use strict";Er();be();Sr();Rr();Aa={decodeHtmlEntities:br,lowercase:e=>e.toLowerCase()},Na=new Set(Object.keys(Aa))});var Ar=u(()=>{"use strict"});var Nr=u(()=>{"use strict"});var Dr=u(()=>{"use strict"});var Ot,Da,Ct,tu,Ir=u(()=>{"use strict";be();Ot=["mcp__Figma__","mcp__figma__"],Da={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Ct=Object.keys(Da),tu=new Set(Ct)});var Ia,xa,La,xr=u(()=>{"use strict";Ir();Ia="^[0-9a-zA-Z]{22,128}$",xa=Ot.flatMap(e=>Ct.map(t=>`${e}${t}`)),La={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...Ot],exact:xa}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:Ia},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Lr=u(()=>{"use strict"});var Or=u(()=>{"use strict"});var Cr=u(()=>{"use strict"});var kr=u(()=>{"use strict"});var vr=u(()=>{"use strict"});var Pr=u(()=>{"use strict"});var kt,Oa,Ca,vt,mu,Mr=u(()=>{"use strict";be();kt=["mcp__Sentry__","mcp__sentry__"],Oa="get_sentry_resource",Ca="analyze_issue_with_seer",vt=[Oa,Ca],mu=new Set(vt)});var ka,va,Pa,Ma,Fa,Fr=u(()=>{"use strict";Mr();ka=kt.flatMap(e=>vt.map(t=>`${e}${t}`)),va="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",Pa="^Issue [A-Za-z0-9_-]{1,128}$",Ma="^Issue [0-9]{1,128}$",Fa={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:Pa,titleFallbackPoorestPattern:Ma,match:{claude:{prefixes:[...kt],exact:ka}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:va},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Hr=u(()=>{"use strict"});var Ur=u(()=>{"use strict"});var $r=u(()=>{"use strict"});var jr=u(()=>{"use strict"});var Wr=u(()=>{"use strict";Ar();Nr();Dr();xr();Lr();Or();Cr();kr();vr();Pr();Fr();Hr();Ur();$r();jr()});var Pt=u(()=>{"use strict";be();wr();Wr()});function Mt(e){return Wa(e)}function Ua(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function $a(e){let t=e.indexOf(ja);return t===-1?e:e.slice(0,t)}function Wa(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let R=1;R<t.length;R++)if(t[R].trim()==="---"){n=R;break}if(n===-1)return null;let r=t.slice(1,n),o=Ua($a(t.slice(n+1).join(`
`))),s={},i=[],a=!1;for(let R of r){if(a){let N=/^\s+- (.+)$/.exec(R);if(N){try{let K=JSON.parse(N[1]);Ba(K)&&i.push(K)}catch{}continue}a=!1}if(R.trim()==="fields:"){a=!0;continue}let x=/^([a-zA-Z]+):\s*(.+)$/.exec(R);x&&(s[x[1]]=x[2])}let l=R=>{let x=s[R];if(x!==void 0)try{let N=JSON.parse(x);return typeof N=="string"?N:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!Ga(c))return null;let p=c,g=d,_=l("title"),h=l("url"),m=l("referencedAt"),E=l("sourceToolName");return!_||m===void 0||!E?null:{mapKey:`${p}:${g}`,source:p,nativeId:g,title:_,referencedAt:m,toolName:E,...h!==void 0?{url:h}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function Ba(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function Ga(e){return e.length>0&&/^[\w-]+$/.test(e)}var nm,ja,Re=u(()=>{"use strict";S();Pt();nm=f("ReferenceStore");ja="<!-- jolli:auto-note -->"});var Ft=u(()=>{"use strict"});var im,Br=u(()=>{"use strict";S();im=f("SkillStore")});function we(){return(0,Xe.join)((0,Gr.homedir)(),".jolli","jollimemory")}async function jt(e){let t=(0,Xe.join)(e,Kr);try{let n=await(0,V.readFile)(t,"utf-8"),r=JSON.parse(n);return Ka(r)}catch{return $t.debug("No config file found in %s, using defaults",e),{}}}function Ka(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function Xa(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:($t.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Wt(e){return qa(e,we())}async function qa(e,t){return yr(t,async()=>{let{update:n,result:r}=e(await jt(t));return n!==null&&(await Ja(n,t),$t.info("Config saved to %s",t)),r})}async function Ja(e,t){let n=await jt(t),r={...n,...Xa(n,e)};await ar((0,Xe.join)(t,Kr),JSON.stringify(r,null,"	"))}async function Bt(){return jt(we())}function Ht(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function Xr(e){let t=!1,n={};for(let[i,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=Ht(a,Ya);l.changed&&(t=!0),n[i]=l.value}let r;if(e.notes!==void 0){r={};for(let[i,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=Ht(a,Va);l.changed&&(t=!0),r[i]=l.value}}let o;if(e.references!==void 0){o={};for(let[i,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=Ht(a,za);c.changed&&(t=!0),o[i]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Ut,V,Gr,Xe,$t,Kr,Rm,wm,Am,Nm,Ya,Va,za,Ae=u(()=>{"use strict";Ut=require("node:crypto"),V=require("node:fs/promises"),Gr=require("node:os"),Xe=require("node:path");S();wt();lr();Te();Re();Ft();Br();$t=f("SessionTracker"),Kr="config.json",Rm=2880*60*1e3;wm=2880*60*1e3,Am=10080*60*1e3,Nm=(0,Ut.randomBytes)(4).toString("hex"),Ya=["ignored","branch","editCount"],Va=["ignored","branch"],za=["ignored","branch","commitHash","contentHashAtCommit"]});async function qt(e,t,n={}){await(0,z.mkdir)((0,qr.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,z.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,z.rename)(r,e)}catch(o){throw await(0,z.unlink)(r).catch(()=>{}),o}}var z,qr,Jt=u(()=>{"use strict";z=require("node:fs/promises"),qr=require("node:path")});function tl(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function nl(e){let t=le(e)?.commonDir;if(t)return t;let n=await O(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,H.isAbsolute)(r)?r:(0,H.join)(e,r):null}async function Qr(e){let t=await nl(e);if(t===null)return{profilePath:(0,H.join)(M(e),Jr),legacyMarkerPath:null};let n=(0,H.dirname)(t);return{profilePath:(0,H.join)(M(n),Jr),legacyMarkerPath:(0,H.join)(t,Qa,Za)}}async function Vt(e){try{let t=await(0,Ne.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function rl(e){try{return await(0,Ne.stat)(e),!0}catch{return!1}}async function ol(e,t){await qt(e,`${JSON.stringify(t,null,"	")}
`)}function Yt(e,t,n,r,o,s){if(e==="read"){let i=`${o}|${t}|${n}`;if(Yr.has(i))return n;Yr.add(i)}return zr.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),n}function sl(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function il(e){let t;try{t=await rr(e)}catch{t=[e]}for(let n of t)if(await rl((0,H.join)(M(n),el)))return!0;return!1}async function Zr(e){let{profilePath:t}=await Qr(e),n=await Vt(t);if(n.userDisabled!==void 0){let s=await Vr(e,t,n.userDisabled===!0);return Yt("read","migrate:userDisabled",s,e,t,n)}if(n.manuallyDisabled!==void 0)return Yt("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await il(e),o=await Vr(e,t,r);return Yt("read","migrate:legacy-marker",o,e,t,n)}async function Vr(e,t,n){let r=await _r(e,async()=>{let o=await Vt(t),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?n:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(zr.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",sl()),await ol(t,tl(o,i))),i}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function De(e){let{profilePath:t}=await Qr(e);return(await Vt(t)).cutoverFence??null}var Ne,H,zr,Jr,Qa,Za,el,Yr,ue=u(()=>{"use strict";Ne=require("node:fs/promises"),H=require("node:path");S();W();Jt();We();J();Te();zr=f("RepoProfile"),Jr="profile.json",Qa="jollimemory",Za="backfill-card-dismissed",el="disabled-by-user";Yr=new Set});function eo(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var to=u(()=>{"use strict"});function b(e,t,n,r){if(!no.test(t))throw new Error(`unsafe table name in migration: ${t}`);if(!no.test(n))throw new Error(`unsafe column name in migration: ${n}`);if(!al.test(r))throw new Error(`unsafe column declaration in migration: ${r}`);e.prepare("SELECT name FROM pragma_table_info(?)").all(t).some(s=>s.name===n)||e.exec(`ALTER TABLE ${t} ADD COLUMN ${n} ${r};`)}var T,no,al,w=u(()=>{"use strict";T=(e,t)=>({name:e,sql:t,run:n=>n.exec(t)}),no=/^[A-Za-z_][A-Za-z0-9_]*$/,al=/^[A-Za-z0-9_ '.-]+$/});var ll,cl,ro,oo=u(()=>{"use strict";w();ll=`
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
`,cl=`
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
`,ro=T("BASELINE_DDL",ll+`
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
`+cl)});var so,io=u(()=>{"use strict";w();so=T("RECALL_RECEIPTS_DDL",`
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
`)});var ao,lo=u(()=>{"use strict";w();ao=T("SKILL_CONTEXT_KIND_DDL",`
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('skill');
`)});var co,uo=u(()=>{"use strict";w();co={name:"EVENT_FAILED_KIND_DDL",run:e=>b(e,"events_raw","failed_kind","TEXT")}});var mo,po=u(()=>{"use strict";w();mo={name:"TOOL_CALL_TIME_DDL",run:e=>b(e,"session_tool_use","last_call_at_ms","INTEGER")}});var fo,go=u(()=>{"use strict";w();fo=T("SCHEMA_MIGRATIONS_DDL",`
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
`)});var ho,yo=u(()=>{"use strict";w();ho=T("REPOS_DELETE_ALLOWED_DDL",`
DROP TRIGGER IF EXISTS repos_no_delete;
`)});function yl(e){b(e,"sessions","written_at_ms","INTEGER NOT NULL DEFAULT 0"),b(e,"session_model_usage","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),b(e,"session_tool_use","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),b(e,"recall_receipts","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),b(e,"commits","written_at_ms","INTEGER NOT NULL DEFAULT 0"),e.exec(dl),e.exec(ml),e.exec(pl),e.exec(fl),e.exec(hl),e.exec(gl)}var dl,ul,ml,pl,fl,gl,hl,_o,Eo=u(()=>{"use strict";w();dl=`
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
`,ul=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,ml=`
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
${ul}
`,pl=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,fl=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,gl=`
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
`,hl=`
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
`;_o={name:"SESSION_STATS_SYNC_DDL",run:yl}});var So,To=u(()=>{"use strict";w();So=T("SESSION_ACTIVITY_DDL",`
CREATE TABLE IF NOT EXISTS session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX IF NOT EXISTS ix_activity_recorded ON session_activity(recorded_at_ms);
`)});var bo,Ro=u(()=>{"use strict";w();bo={name:"SKILL_TOKEN_USAGE_DDL",run:e=>{b(e,"session_tool_use","input_tokens","INTEGER"),b(e,"session_tool_use","output_tokens","INTEGER"),b(e,"session_tool_use","cached_tokens","INTEGER"),b(e,"session_tool_use","usage_confidence","TEXT")}}});var wo,Ao=u(()=>{"use strict";w();wo=T("SKILL_INVOCATIONS_DDL",`
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
`)});var No,Do=u(()=>{"use strict";w();No={name:"SKILL_PLUGIN_DDL",run:e=>b(e,"session_tool_use","plugin","TEXT")}});var Io,xo=u(()=>{"use strict";w();Io={name:"SKILL_ORIGIN_ROOT_DDL",run:e=>b(e,"session_tool_use","origin_root","TEXT")}});var Lo,Oo=u(()=>{"use strict";w();Lo=T("2026-08-25-0000-memory-transcripts-covering-index",`
CREATE INDEX IF NOT EXISTS ix_mt_transcript_covering
  ON memory_transcripts(repo_id, transcript_id, commit_hash);
`)});var Co,ko=u(()=>{"use strict";w();Co={name:"2026-08-25-0001-memory-reachable",run:e=>b(e,"memories","reachable","INTEGER NOT NULL DEFAULT 1")}});var vo,Po=u(()=>{"use strict";w();vo={name:"2026-08-25-0002-commit-reachable",run:e=>b(e,"commits","reachable","INTEGER NOT NULL DEFAULT 1")}});var Mo,Fo=u(()=>{"use strict";w();Mo=T("2026-08-26-0000-memory-lookups",`
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
`)});var Ho,Uo=u(()=>{"use strict";w();Ho=T("2026-08-27-0804-session-activity-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_activity_keyset
  ON session_activity(recorded_at_ms, session_event_id, bucket_ms);
`)});var $o,jo=u(()=>{"use strict";w();$o=T("2026-08-27-0824-session-turns",`
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
`)});var Wo,Bo=u(()=>{"use strict";w();Wo={name:"2026-08-27-0922-skill-invocation-sync-stamp",run:e=>b(e,"skill_invocations","updated_at_ms","INTEGER NOT NULL DEFAULT 0")}});var Go,Ko=u(()=>{"use strict";w();Go=T("2026-08-28-0516-session-turns-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_turns_keyset
  ON session_turns(recorded_at_ms, session_event_id, slice_id, seq);
`)});var Xo,qo=u(()=>{"use strict";w();Xo=T("2026-08-28-0910-skill-invocation-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_si_keyset
  ON skill_invocations(updated_at_ms, session_event_id, skill_name, at_ms);
`)});var qe,zt=u(()=>{"use strict";oo();io();lo();uo();po();go();yo();Eo();To();Ro();Ao();Do();xo();Oo();ko();Po();Fo();Uo();jo();Bo();Ko();qo();w();qe=[ro,so,ao,co,mo,fo,ho,_o,So,bo,wo,No,Io,Lo,Co,vo,Mo,Ho,$o,Wo,Go,Xo]});function El(e=process.env){let t=e.JOLLI_SLOW_SQL_MS?.trim();if(t===void 0||t==="")return Jo;if(t.toLowerCase()==="off")return null;let n=Number(t);return Number.isFinite(n)&&n>=0?n:Jo}function Sl(e){let t=e.replace(/\s+/g," ").trim();return t.length>Yo?`${t.slice(0,Yo)}\u2026`:t}function Tl(e){let t=e.rows===void 0?"":` rows=${e.rows}`;_l.info("%dms %s [%s] params=%d%s :: %s",Math.round(e.ms),e.method,e.role,e.params,t,e.sql)}function Vo(e,t={}){let n="thresholdMs"in t?t.thresholdMs:El();if(n==null)return e;let r=t.now??(()=>performance.now()),o=t.onSlow??Tl,s=t.role??"rw",i=(l,c,d,p)=>{let g=r(),_;try{let h=p();return l==="all"&&Array.isArray(h)&&(_=h.length),h}finally{let h=r()-g;h>=n&&o({ms:h,method:l,sql:Sl(c),params:d,role:s,..._===void 0?{}:{rows:_}})}};return{exec:l=>i("exec",l,0,()=>e.exec(l)),close:()=>e.close(),prepare:l=>{let c=e.prepare(l);return{all:(...d)=>i("all",l,d.length,()=>c.all(...d)),get:(...d)=>i("get",l,d.length,()=>c.get(...d)),run:(...d)=>i("run",l,d.length,()=>c.run(...d))}}}}var _l,Jo,Yo,zo=u(()=>{"use strict";S();_l=f("SlowQuery"),Jo=200,Yo=240});function xe(){return(0,Ve.join)(we(),"jollimemory.db")}function oe(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>Ie.major?!0:n<Ie.major?!1:r>=Ie.minor}function Al(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function en(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=Al(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:A(t),tableConfirmed:n==="present"}}}function Qo(e){let t=en(e);return t.kind==="rows"?t.rows:void 0}function Je(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function Nl(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function Qt(e){return e.sql??""}function Dl(e){let t=en(e);if(t.kind==="none")return;if(t.kind==="unreadable"){Ye.has(Zo)||(Ye.add(Zo),Q.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(qe.map(o=>o.name));for(let[o,s]of Nl(n))r.has(o)||Ye.has(o)||(Ye.add(o),Q.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,pt))}function Il(e,t={}){let n=t.now??Date.now,r=t.appliedBy??pt,o=en(e),s=new Set;if(o.kind==="rows")for(let c of o.rows)(c.outcome==="applied"||c.outcome==="baseline")&&s.add(c.name);else o.kind==="none"?Q.info("no migration log in this database \u2014 replaying every entry (all are re-runnable)"):Q.warn(o.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 replaying every entry and recording nothing":"the database could not be queried for its migration log (%s) \u2014 replaying every entry and recording nothing",o.reason);let i=qe.map((c,d)=>({m:c,slot:d})).filter(({m:c})=>!s.has(c.name));if(i.length===0)return;let a=[],l=()=>{for(let c of a)Je(e,c);a.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:c,slot:d}of i){let p=n();e.exec("BEGIN IMMEDIATE");try{if(Qo(e)?.some(h=>h.name===c.name&&(h.outcome==="applied"||h.outcome==="baseline"))){l(),Je(e,{slot:d,name:c.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:Qt(c)}),e.exec("COMMIT");continue}c.run(e);let _={slot:d,name:c.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-p,ddl:Qt(c)};Qo(e)?(l(),Je(e,_)):a.push(_),e.exec("COMMIT")}catch(g){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(c.name),Je(e,{slot:d,name:c.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-p,ddl:Qt(c)})}catch(_){Q.debug("could not record the failed migration %s: %s",c.name,A(_))}throw g}}}finally{e.exec("PRAGMA foreign_keys = ON")}Q.info("dashboard schema migrated: %s",i.map(({m:c})=>c.name).join(", "))}function xl(e){let t=(0,Ve.dirname)(e);try{(0,B.mkdirSync)(t,{recursive:!0,mode:448}),((0,B.statSync)(t).mode&511)!==448&&(0,B.chmodSync)(t,448)}catch(n){Q.warn("could not restrict %s to owner-only: %s",t,A(n))}}function Ll(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,B.statSync)(t).mode&511)!==384&&(0,B.chmodSync)(t,384)}catch(n){yt(n)||Q.warn("could not restrict %s to 0600: %s",t,A(n))}}async function es(e,t){if(!oe())throw new Zt(process.versions.node);let n=t.dbPath??xe(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||xl(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?Rl:bl)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??wl}`),e||Ll(n),Vo(a,{role:e?"ro":"rw"})}catch(l){try{a?.close()}catch{}if(eo(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function ts(e,t={}){let n=await es(!1,t);try{return Dl(n),Il(n),await e(n)}finally{n.close()}}async function tn(e,t={}){let n=await es(!0,t);try{return await e(n)}finally{n.close()}}function ze(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var B,Ve,Q,Ie,Zt,bl,Rl,wl,Ye,Zo,Z=u(()=>{"use strict";B=require("node:fs"),Ve=require("node:path");gt();Ae();to();S();zt();zo();zt();w();Q=f("DashboardDb"),Ie={major:22,minor:13};Zt=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${Ie.major}.${Ie.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},bl=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],Rl=["PRAGMA foreign_keys = ON"],wl=2e3;Ye=new Set,Zo="\0unreadable-log"});function nn(e){let t=s=>{try{return(0,Le.statSync)(`${e}${s}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var Le,gf,rn=u(()=>{"use strict";Le=require("node:fs");S();gf=f("DbDetection")});var ns=u(()=>{"use strict";W()});var wf,rs=u(()=>{"use strict";S();ns();$();wf=f("MetadataManager")});function Pl(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return j("ssh",["-G",n],{encoding:"utf-8",timeout:Cl,stdio:["ignore","pipe","pipe"]})}catch(r){return Ol.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function ss(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function Qe(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=os.get(n);if(r!==void 0)return r;let o=e,s="",i=vl(e,t);if(i){let c=ss(i,"hostname");c&&(o=c);let d=ss(i,"port");d&&(s=d)}let a=kl.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:s,endpointRemapped:!1};return os.set(n,l),l}function Ze(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var Ol,Cl,kl,os,vl,on=u(()=>{"use strict";S();W();Ol=f("SshAliasResolver"),Cl=5e3,kl=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),os=new Map,vl=Pl});function sn(e,t){return Ml.has(e)?t:""}var Mf,is,Ml,as=u(()=>{"use strict";S();W();rs();$();on();Mf=f("KBPathResolver"),is=new Set(["github.com","gitlab.com","bitbucket.org"]),Ml=new Set(["github.com","gitlab.com","bitbucket.org"])});async function us(e){let t=await O(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Oe(e):Fl(n,e)}function Fl(e,t){let n=e.trim();if(n.length===0)return Oe(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=Qe(r[2],r[1].slice(0,-1)||void 0),a=i.host.toLowerCase(),l=cs(a,ls(r[3])),c=ds("ssh",sn(a,i.port));return`https://${Ze(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return Oe(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let a=s==="ssh"?Qe(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=cs(l,ls(o.pathname.replace(/^\/+/,""))),d=a.endpointRemapped?"":o.port!==""?o.port:a.port,p=s==="ssh"?sn(l,d):d,g=ds(s,p);return`https://${Ze(l)}${g}/${c}`}return Oe(s==="file"?o.pathname:t)}function Oe(e){let t=ye(ee(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function ls(e){let t=ye(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),ye(t)}function cs(e,t){return is.has(e)?t.toLowerCase():t}function ds(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===Hl[e]?"":`:${t}`:`:${t}`}var Hl,ms=u(()=>{"use strict";J();as();$();on();Hl={ssh:"22",git:"9418"}});async function jl(e){try{let n=await us(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){Ul.debug("no canonical remote for %s (%s) \u2014 using path identity",e,A(n))}let t=(0,ps.createHash)("sha256").update(ee(e)).digest("hex").slice(0,32);return{identity:`${$l}${t}`}}async function Ce(e){return jl(await nr(e))}var ps,Ul,$l,ke=u(()=>{"use strict";ps=require("node:crypto");Jt();J();ms();Te();$();ue();Ae();S();Ul=f("RepoRegistry"),$l="local:"});var gs={};mt(gs,{hasCutoverRow:()=>Xl,resetCutoverRouterCaches:()=>Bl,resolveCutoverRoute:()=>ln,routeMovesOffOrphanBranch:()=>Kl});function Bl(){an.clear()}async function Gl(e){let t=an.get(e);if(t!==void 0)return t;let{identity:n}=await Ce(e);return an.set(e,n),n}function Kl(e){return e?.state==="cutover"||e?.state==="legacy-fenced"}async function fs(e,t){if(!oe())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=nn(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let s=await Gl(e),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:A(r)}}}async function Xl(e,t={}){return(await fs(e,t.dbPath??xe())).kind==="row"}async function ln(e,t={}){let n=await De(e).catch(()=>null),r=await fs(e,t.dbPath??xe());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(Wl.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var Wl,an,cn=u(()=>{"use strict";ue();S();Z();rn();ke();Wl=f("CutoverRouter"),an=new Map});function zs(){return"0.99.16"}function Js(e){return/^\d/.test(e)}function Qs(e,t){if(!Js(e)||!Js(t))return!1;let n=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),r=n(e),o=n(t);for(let s=0;s<Math.max(r.length,o.length);s++){let i=r[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function at(e,t=Oc){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",i),e.removeListener("close",a),e.removeListener("error",a),n(c))},i=c=>{r=Buffer.concat([r,c]);let d=r.indexOf(10);if(d===-1){r.length>Cc&&s(void 0);return}s({line:r.subarray(0,d).toString("utf8"),rest:r.subarray(d+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),t);l.unref?.(),e.on("data",i),e.once("close",a),e.once("error",a)})}function Zs(e,t){return(0,ge.join)((0,Ys.tmpdir)(),`.jolli-${e}-${t}`)}function Tn(e){return`${JSON.stringify(e)}
`}var Sn,Ys,ge,Vs,En,Oc,Cc,bn=u(()=>{"use strict";Sn=require("node:fs"),Ys=require("node:os"),ge=require("node:path"),Vs=require("node:url");$();Oc=1e4,Cc=4096});function Pc(e){let t=(0,ie.join)((0,ie.dirname)((0,wn.fileURLToPath)(e)),kc);return(0,Rn.existsSync)(t)?t:void 0}function An(e,t=process.argv[1],n=process.execArgv){let r=Pc(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,ie.dirname)((0,wn.fileURLToPath)(e)),s=(0,ie.join)((0,ie.dirname)(o),vc);if(t?.endsWith(".ts")&&(0,Rn.existsSync)(s))return{entry:s,nodeArgs:n}}var Rn,ie,wn,kc,vc,ei=u(()=>{"use strict";Rn=require("node:fs"),ie=require("node:path"),wn=require("node:url"),kc="Cli.js",vc="Cli.ts"});function Fc(e){return Zs("global",e)}function Hc(e=(0,ni.homedir)()){return(0,ti.createHash)("sha256").update(Ue(e,"win32")).digest("hex").slice(0,16)}function lt(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${Hc(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,ri.join)(Fc(n),"daemon.sock")}function In(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:s,startedAt:i}=t;if(!(n!=="hello"||r!==Mc)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:r,version:o,pid:s,startedAt:i}}var ti,ni,ri,Mc,Nn,Dn,oi=u(()=>{"use strict";ti=require("node:crypto"),ni=require("node:os"),ri=require("node:path");bn();$();Mc=1,Nn="global-daemon",Dn=300});var ai={};mt(ai,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>Ln,ensureGlobalDaemon:()=>Wc,probeGlobalDaemon:()=>Kc,retireGlobalDaemon:()=>Gc,shouldSkipGlobalDaemon:()=>On,triggerEnsureGlobalDaemon:()=>Bc});function On(e){return e!==null&&$c.has(e)}function Cn(e){return new Promise(t=>{let n=!1,r=(0,ii.connect)(e),o=i=>{n||(n=!0,clearTimeout(s),r.removeAllListeners("connect"),i.socket===void 0&&r.destroy(),t(i))},s=setTimeout(()=>o({socket:void 0}),Uc);s.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",i=>{if(n){v.warn("global daemon socket error after connect: %s",A(i));return}o({socket:void 0,code:i.code})})})}async function jc(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,si.unlink)(e)}catch{}}async function Wc(e={}){try{if(On(e.command??null))return"skipped-excluded-command";if(!oe(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??lt(),{socket:n,code:r}=await Cn(t);if(!n)return r==="ECONNREFUSED"&&await jc(t),(e.spawnDaemon??Xc)(t),"spawned";try{let o=await at(n,e.helloTimeoutMs??Dn),s=o?In(o.line):void 0;if(!s)return"already-running";let i=e.ownVersion??zs();return Qs(i,s.version)?(n.write(Tn({t:"retire"})),v.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return v.warn("could not ensure the global daemon: %s",A(t)),"failed"}}function Bc(e={}){try{return On(e.command??null)||!oe(e.nodeVersion??process.versions.node)?!1:(qc(e.socketPath),!0)}catch(t){return v.warn("could not trigger the global daemon ensure helper: %s",A(t)),!1}}async function Gc(e={}){try{let{socket:t}=await Cn(e.socketPath??lt());return t?(await at(t,Dn),t.write(Tn({t:"retire"})),t.end(),!0):!1}catch(t){return v.warn("could not retire the global daemon: %s",A(t)),!1}}async function Kc(e){try{let{socket:t}=await Cn(e??lt());if(!t)return;try{let n=await at(t,5e3);return n?In(n.line):void 0}finally{t.end()}}catch{return}}function Xc(e){let t=An(__jmImportMetaUrl);if(!t){v.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=ne(process.execPath,[...t.nodeArgs,t.entry,Nn,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,xn.homedir)()});n.on("error",r=>v.warn("global daemon failed to spawn: %s",A(r))),n.unref(),v.info("spawned global daemon (pid %d)",n.pid??-1)}function qc(e){let t=An(__jmImportMetaUrl);if(!t){v.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,Ln];e&&n.push("--socket",e);let r=ne(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,xn.homedir)()});r.on("error",o=>v.warn("global daemon ensure helper failed to start: %s",A(o))),r.unref(),v.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var si,ii,xn,v,Ln,Uc,$c,li=u(()=>{"use strict";si=require("node:fs/promises"),ii=require("node:net"),xn=require("node:os");bn();Z();S();ei();W();oi();v=f("EnsureGlobalDaemon"),Ln="global-daemon-ensure",Uc=200,$c=new Set([Nn,Ln,"mcp","mcp-serve","daemon","uninstall","disable"])});var dd={};mt(dd,{armSessionStartDeadline:()=>ui,buildSessionStartContext:()=>_i,computeLoginReminder:()=>pi,ensurePluginDefaultProvider:()=>zc,formatRecallSuggestion:()=>Si,getAuthFailureReminder:()=>hi,getLoginReminder:()=>fi,main:()=>yi,warmBriefingCache:()=>Zc});module.exports=xi(dd);var L=require("node:fs"),P=require("node:path"),di=require("node:url");var he=require("node:fs");var Mn=require("node:path"),Li="JOLLI_LOCAL_AGENT_CHILD",Oi=".jolli-local-agent-child";function Fn(e=process.env,t){return e[Li]==="1"?!0:t!==void 0&&(0,he.existsSync)((0,Mn.join)(t,Oi))}gt();We();J();function sr(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}Ae();var Gt={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},xm=Object.keys(Gt);function Kt(e){return e===void 0?void 0:Gt[e]?.localAgentTool}function Xt(e,t){return(e===void 0?void 0:Gt[e]?.skillInvocation)?.replace("<name>",t)}ue();Ae();cn();ke();S();J();ue();var et=class extends Error{constructor(t){super(t),this.name="OrphanBranchFrozenError"}},me=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return Tt(X,t,this.cwd)}async batchReadFiles(t){return bt(X,t,this.cwd)}async writeFiles(t,n){if(de())return;if(await De(this.cwd??process.cwd()).catch(()=>null)!==null)throw new et("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(cn(),gs));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new et("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await tr(X,t,n,this.cwd)}async listFiles(t){return[...await Rt(X,t,this.cwd)]}async exists(){return Et(X,this.cwd)}async ensure(){await St(X,this.cwd)}};var $s=require("node:zlib");Z();var Hs=require("node:zlib");Re();function hs(e){return e.version>=4}function ql(e){return[...e??[]].reverse()}function ve(e){let t=ql(e.children).flatMap(ve),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function dn(e){return hs(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):ve(e)}function un(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...un(n));return t}function pe(e,t){return e.transcripts!==void 0?e.transcripts:un(e).filter(n=>t.has(n))}S();Z();function Jl(e,t,n){return n.sessionId?e.get(t,n.source??"claude",n.sessionId)?.event_id:void 0}function Yl(e){return e.prepare("SELECT event_id FROM sessions WHERE repo_id = ? AND source = ? AND session_id = ?")}function tt(e,t,n){e.prepare(`DELETE FROM session_turns
		  WHERE slice_id = ?
		    AND session_event_id IN (SELECT event_id FROM sessions WHERE repo_id = ?)`).run(n,t)}function mn(e,t,n,r,o){let s=e.prepare(`INSERT OR REPLACE INTO session_turns
		 (session_event_id, slice_id, seq, role, ts_ms, kind, recorded_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`),i=Yl(e),a=e.prepare("DELETE FROM session_turns WHERE session_event_id = ? AND slice_id = ?");for(let l of r){let c=Jl(i,t,l);if(c===void 0)continue;a.run(c,n);let d=0;for(let p of l.entries??[]){let g=p.timestamp===void 0?void 0:Date.parse(p.timestamp),_=g===void 0||Number.isNaN(g)?null:g;s.run(c,n,d++,p.role,_,"turn",o)}for(let[p,g]of[["compaction",l.compactions],["test-run",l.testRuns],["turn-abort",l.turnAborts]])for(let _ of g??[])s.run(c,n,d++,null,_,p,o)}}J();S();S();wt();var pn=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},fg=new pn;J();Te();xt();Re();var Vl="local-agent-auth";function ys(e){return e.summaryError===Vl}var _s="sonnet",Es="inherit",nt={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:_s,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:_s,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:Es,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:Es,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."},hermes:{label:"Hermes",loginHint:"Run `hermes setup` (or `hermes model`) to configure a provider."}};function rt(e){return nt[e]?.label??"Local agent"}function Ss(e){return nt[e]?.loginHint??"Sign in to your local agent CLI."}function Ts(e){let t=nt[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var Tg=[...new Set(Object.values(nt).flatMap(e=>(e.models??[]).map(t=>t.id)))];Pt();function U(e){return e.generatedAt||e.commitDate}Ft();var zl;async function Ql(e){let t=await Rs(e);return t.ok?t.storage:(fn.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new me(e))}async function Zl(e,t){return e??zl??await Ql(t)}var fn=f("SummaryStore"),ec="index.json";async function ot(e,t){return tc(e,t)}async function tc(e,t){let n=await Zl(t,e),r=await n.readFile(ec);if(!r)return fn.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return fn.error("Failed to parse index.json: %s",o.message),null}}function bs(e){let t=dn(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}var Sh=f("ProcessedSourceStore");ue();Re();S();var wh=f("TopicIndexStore");var nc=new Set(["index","processed"]);function Ns(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!nc.has(t)}var Ds=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",Ns]],Nh=Ds.map(([e])=>e),Dh=Object.fromEntries(Ds);S();var Ch=f("TopicPageStore");S();Z();It();S();Z();rn();ke();var Uh=f("ImportState");var $h=10*6e4;ke();S();Z();S();var Gh=f("DashboardScope");var Is=new Map;function rc(e){let t=Is.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),Is.set(e,t)),t}function st(e,t){let n=rc(t).formatToParts(e),r=o=>Number.parseInt(n.find(s=>s.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}var xs=new Map;function oc(e,t){let n=st(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}function Ls(e,t){let n=xs.get(t);if(n&&e>=n.fromMs&&e<n.toMs)return n.key;let r=st(e,t),o=`${r.year}-${String(r.month).padStart(2,"0")}-${String(r.day).padStart(2,"0")}`,s=Os(r.year,r.month,r.day,t);return xs.set(t,{fromMs:s,toMs:Cs(s,1,t),key:o}),o}function Os(e,t,n,r){let o=Date.UTC(e,t-1,n),s=o;for(let i=0;i<3;i++){let a=st(s,r),l=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute)-o;if(l===0)return s;s-=l}return sc(e,t,n,r)}function sc(e,t,n,r){let o=`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`,s=Date.UTC(e,t-1,n),i=Math.floor((s-15*36e5)/6e4),a=Math.ceil((s+14*36e5)/6e4);for(;a-i>1;){let l=Math.floor((i+a)/2);oc(l*6e4,r)<o?i=l:a=l}return a*6e4}function gn(e,t){let n=st(e,t);return Os(n.year,n.month,n.day,t)}function Cs(e,t,n){if(!Number.isInteger(t))throw new Error(`addLocalDays: days must be a finite integer, got ${t}`);let r=gn(e,n),o=t>=0?1:-1;for(let s=0;s!==t;s+=o)r=gn(r+o*864e5+432e5,n);return r}var hn=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,yn="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",Jh=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${yn} AS at_ms
	  FROM memories m
	  ${hn}
	 WHERE m.parent_hash IS NULL
)`,Pe=`SELECT ${yn} AS at_ms
	  FROM memories m
	  ${hn}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`;var iy=f("StatsRollup"),lc={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},cc=Object.keys(lc),dc="built",uc="tokens";var ay=[...cc,uc,dc];function Me(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(s=>Ls(s,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var mc=f("SotImport");function G(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function ks(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}var pc=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function vs(e,t,n){for(let{path:r,accepts:o}of pc){let s=e;for(let a of r){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function Ps(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function Ms(e,t,n,r,o){let s=e.prepare(Pe),i=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=i!==void 0&&i!==r?[r,i]:[r],l=p=>s.get(t,p)?.at_ms??void 0,c=[],d=!1;for(let p of a){let g=s.get(t,p);p===r&&(d=g!==void 0),g?.at_ms!=null&&c.push(g.at_ms)}if(!d)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let p of a){let g=l(p);g!==void 0&&c.push(g)}return i!==void 0&&i!==r&&mc.info("alias %s retargeted %s -> %s",n,i,r),{stored:!0,days:c}}function Fs(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let s=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let p=i.get(l);(p.root_hash!==c||p.depth!==d)&&s.run(c,d,t,l);for(let g of r.get(l)??[])o.push({hash:g,root:c,depth:d+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}var se=f("SotWrite"),fc={plans:"plan",notes:"note",references:"reference",skills:"skill"};function gc(e){let t=[],n=(r,o,s)=>{t.push({hash:r.commitHash,parentInFile:o,pos:s,summary:r}),(r.children??[]).forEach((i,a)=>{n(i,r.commitHash,a)})};return n(e,null,null),t}function hc(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=G(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(gc(c));continue}if(n.path==="index.json"){if(r)continue;let c=G(n.content);for(let d of c?.entries??[])d.treeHash&&t.treeHashes.set(d.commitHash,d.treeHash);for(let[d,p]of Object.entries(c?.commitAliases??{}))t.aliases.set(d,p);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=G(n.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&t.topicSummaries.set(d.stableSlug,d.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let s=n.path.match(/^transcripts\/(.+)\.json$/);if(s){r?t.transcriptDeletes.push(s[1]):t.transcriptWrites.push({id:s[1],content:n.content});continue}let i=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=fc[i[1]];r?t.contextDeletes.push({kind:c,key:i[2]}):t.contextWrites.push({kind:c,key:i[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function Fe(e,t){se.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function yc(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function _c(e,t,n,r){let o=[];for(let h of n.summaryDeletes){let m=e.prepare(Pe).get(t,h);m?.at_ms!=null&&o.push(m.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,h)}if(Me(e,o),n.summaryTrees.length===0)return;let s=new Set;for(let h of n.summaryTrees)for(let m of h)"children"in m.summary&&s.add(m.hash);let i=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let h of s)i.run(t,h);let a=new Map;for(let h of n.summaryTrees)for(let m of h){if(m.parentInFile===null||m.pos===null)continue;let E=a.get(m.parentInFile)??new Map;E.set(m.hash,m.pos),a.set(m.parentInFile,E)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(h,m)=>se.info("write degraded a value: %s %s",h,m);for(let h of n.summaryTrees)for(let m of h){let E=m.parentInFile,y=m.pos;if(m.parentInFile===null){let N=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,m.hash);N&&(E=N.parent_hash,y=N.child_pos,y!==null&&y>=1e6&&((E===null?void 0:a.get(E))?.has(m.hash)||(E=null,y=null)))}let R=JSON.stringify("children"in m.summary?{...m.summary,children:[]}:m.summary);l.run(t,m.hash,E,y,m.hash,0,R,n.treeHashes.get(m.hash)??null,r,r,Ps(m.summary,m.hash,r,c)),vs(m.summary,m.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,m.hash);let x=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(m.summary.topics??[]).forEach((N,K)=>{if(!N.title){c("topic",`${m.hash}[${K}] has no title`);return}x.run(t,m.hash,K,N.category??null,N.importance??null,N.title)})}let d=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),p=[],g=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),_=e.prepare(Pe);for(let h of s){for(let{commit_hash:m}of g.all(t,h)){let E=_.get(t,m);E?.at_ms!=null&&p.push(E.at_ms)}d.run(t,h)}Me(e,p),Fs(e,t)}function Ec(e,t,n,r){let o=[];for(let[s,i]of n.aliases){let a=Ms(e,t,s,i,r);if(!a.stored){se.info("dropping alias %s -> %s (no such memory row)",s,i);continue}o.push(...a.days)}Me(e,o)}function Sc(e,t,n,r){let o=new Set;for(let s of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),tt(e,t,s);for(let{id:s,content:i}of n.transcriptWrites){let a=G(i);if(!a||!Array.isArray(a.sessions)){Fe("transcript",s);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,s,(0,Hs.deflateSync)(Buffer.from(i,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,s,l.sessionId,l.source??null);tt(e,t,s),mn(e,t,s,a.sessions,r),o.add(s)}return o}function Tc(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),s=new Set(n.summaryTrees.flat().flatMap(c=>[...pe(c.summary,r)])),i=[...r].filter(c=>!s.has(c));if(i.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let d=a.all(t,`%${c}%`);for(let p of d){if(o.has(p.commit_hash))continue;let g=G(p.summary_json);g&&pe(g,r).includes(c)&&(l.run(t,p.commit_hash,c),se.info("linked stored transcript %s to memory %s written earlier",c,p.commit_hash))}}}function bc(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let s of o){let i=[...new Set(pe(s.summary,r).filter(a=>r.has(a)))];for(let a of s.summary.transcripts??[])r.has(a)||se.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,s.hash);for(let a of i)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,s.hash,a)}}function Rc(e,t,n,r){for(let{kind:s,key:i}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,s,i);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of n.contextWrites){if(s==="reference"){let d=Mt(a);if(!d){Fe("reference frontmatter",`references/${i}.md`);continue}o.run(t,s,i,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,r,r);continue}let l=s==="plan"||s==="note"?yc(e,t,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,s,i,null,null,null,null,c,l,ks(a),null,a,r,r)}}function wc(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:s}of n.progressWrites){let i=G(s);if(!i){Fe("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){se.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,s,r)}}function Ac(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:s}of n.topicPageWrites){let i=G(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){Fe("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,i.stableSlug,i.title,n.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of n.topicSummaries){let i=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,t,o);Number(i.changes)===0&&se.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=G(n.processedSet);if(!o?.processed)Fe("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let s=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(t,i,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function Us(e,t,n,r){let o=hc(n);ze(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),_c(e,t,o,r),Ec(e,t,o,r);let s=Sc(e,t,o,r);bc(e,t,o),Tc(e,t,o,s),Rc(e,t,o,r),wc(e,t,o,r),Ac(e,t,o,r)})}S();function js(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function _n(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>_n(e,r))),n}function Nc(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),s=o.find(i=>i.commit_hash===n);return s?_n(js(o),s):void 0}function Dc(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var it=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return tn(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return tn(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let s of t)o.set(s,this.readOne(n,r,s));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=Nc(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let s=r.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(t,n,s[1]);let i=r.match(/^transcripts\/(.+)\.json$/);if(i){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,i[1]);return c?(0,$s.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),s=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Dc(a.diff_stats_json)}})),i=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=js(r),s=r.filter(i=>i.parent_hash===null).map(i=>bs(_n(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(t,n,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of r)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(i,a)=>n.prepare(i).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(t)).sort()},[])}async writeFiles(t,n){de()||await ts(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Us(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(s=>s.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let s of r){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return r.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var Ic=3e3,Ws=new Map;async function Bs(e){let t=Date.now(),n=Ws.get(e);if(n&&t-n.at<Ic)return n.route;let r=await ln(e);return Ws.set(e,{route:r,at:t}),r}async function Gs(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await Ce(t);return new it(r)}return new me(e)}async function Ks(e){let t=e??process.cwd(),n=await Bs(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Gs(e,t,n)}async function Rs(e){let t=e??process.cwd(),n;try{n=await Bs(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await Gs(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}S();W();function xc(e){return[`1) Re-authenticate ${rt(e)}:  ${Ss(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function Lc(e,t){let n=Ts(e);return n===null?[]:[`${t}${n}`]}function Xs(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${rt(e)} authentication expired or is unavailable.`,...Lc(e,""),"\u2192 Fix with either:",...xc(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}function qs(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var C=f("SessionStartHook"),Jc=new Set(["main","master","develop","development","staging","production"]),ct=500,Yc=250;function ui(e=ct+Yc){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var mi="login-reminder-dismissed";function Vc(e){let t=Xt(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${mi}.)`].join(`
`)}function pi(e,t,n){return t||n?null:Vc(e)}async function zc(e,t){let n=Kt(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await Wt(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(C.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(C.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return C.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function fi(e,t=ft()){let n=await Bt(),r=sr(n),o=(0,P.join)(e,".jolli","jollimemory",mi),s=(0,L.existsSync)(o);if(r&&s)try{(0,L.rmSync)(o)}catch{}return pi(t,r,s)}async function gi(e,t){return(await Ks(t)).readFile(`summaries/${e}.json`)}async function Qc(e,t){try{let n=await gi(e,t);return n?ys(JSON.parse(n)):!1}catch(n){return C.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function hi(e,t=ft()){let n=Kt(t);if(n===void 0)return null;let r=Ri(e);if(!r)return null;let o=await ot(e);if(!o)return null;let s=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(U(c)).getTime()-new Date(U(l)).getTime())[0];if(!await Qc(i.commitHash,e))return null;let a=await Bt();return Xs(a.localAgentTool??n)}async function yi(){if(Fn()){C.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await qs(),{cwd:t}=JSON.parse(e),n=er(t??process.cwd());if(Jn(n),C.info("SessionStartHook invoked (cwd=%s)",n),await Zr(n)){C.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await _i(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):C.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(li(),ai));o()}catch(e){C.info("SessionStartHook failed: %s",e.message)}}async function _i(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[s,i,a]=await Promise.all([r?Promise.race([Ei(e,t),kn(ct)]):Promise.resolve(null),o?Promise.race([hi(e,t),kn(ct)]):Promise.resolve(null),o?Promise.race([fi(e,t),kn(ct)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(C.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function Zc(e,t="shared"){try{return await Ei(e,t)===null?(C.info("Briefing cache not warmed \u2014 nothing to brief on this branch"),!1):(C.info("Briefing cache warmed for the next session start"),!0)}catch(n){return C.info("Briefing cache warm-up failed (non-fatal): %s",n.message),!1}}async function Ei(e,t){let n=dt(e),r=Ri(e,n);if(!r||Jc.has(r))return null;let o=sd(e,r,t,n);if(o)return o;let s=await ot(e);if(!s)return null;let i=s.entries.filter(m=>m.branch===r&&(m.parentCommitHash===null||m.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((m,E)=>new Date(U(E)).getTime()-new Date(U(m)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&ad(U(l)))return null;let d=await ed(l.commitHash,e),p=td(e,r),g=nd(a),_=rd(r,a,l,c,d,p,g,t),h=bi(e,n);return id(e,r,h??l.commitHash,_,t),_}async function ed(e,t){try{let n=await gi(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=ve(r),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(n){return C.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function td(e,t){try{let n=(0,P.join)(e,".jolli","jollimemory","plans.json");if(!(0,L.existsSync)(n))return[];let r=JSON.parse((0,L.readFileSync)(n,"utf-8")),o=Xr(r).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function nd(e){let t=0,n=0,r=0,o=!1;for(let s of e)s.diffStats&&(t+=s.diffStats.filesChanged,n+=s.diffStats.insertions,r+=s.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function rd(e,t,n,r,o,s,i,a){let l=t.length,c=ci(U(r)),d=ci(U(n)),p=ld(U(n),new Date().toISOString()),g=[];g.push(`[Jolli Memory \u2014 ${e}]`);let _=`${l} commits (${c} ~ ${d})`;i&&(_+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),g.push(_);let h=o.lastTopicTitle??n.commitMessage;if(g.push(`Last: ${h} (${d})`),o.keyDecisions.length>0){let E=od(o.keyDecisions);g.push(`Decisions: ${E}`)}s.length>0&&g.push(`Plans: ${s.join("; ")}`);let m=Si(p,a);return m&&g.push(m),g.join(`
`)}function Si(e,t){if(e<=0)return null;let n=Xt(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function od(e){let n=[],r=0;for(let o of e){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),r+s.length>200&&n.length>0)break;n.push(s),r+=s.length+2}return n.join("; ")}function Ti(e){return(0,P.join)(e,".jolli","jollimemory","briefing-cache.json")}function sd(e,t,n,r=dt(e)){let o=Ti(e);if(!(0,L.existsSync)(o))return null;try{let s=JSON.parse((0,L.readFileSync)(o,"utf-8"));if(s.branch!==t||s.clientKind!==n)return null;let i=bi(e,r);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function id(e,t,n,r,o){let s=Ti(e),i={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,P.dirname)(s);(0,L.existsSync)(a)||(0,L.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,L.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,L.renameSync)(l,s)}catch{}}function dt(e){return le(e)}function bi(e,t=dt(e)){let n=t?jn(t):null;if(n)return n;try{return j("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Ri(e,t=dt(e)){let n=t?$n(t):null;if(n)return n;if(t)return null;try{return j("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function kn(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function ad(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function ld(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function ci(e){return e?e.split("T")[0]:"unknown"}function cd(){let e=process.argv[1];if(process.env.VITEST||!e||(0,P.resolve)(e)!==(0,P.resolve)((0,di.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,P.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}cd()&&(ui(),yi());0&&(module.exports={armSessionStartDeadline,buildSessionStartContext,computeLoginReminder,ensurePluginDefaultProvider,formatRecallSuggestion,getAuthFailureReminder,getLoginReminder,main,warmBriefingCache});
