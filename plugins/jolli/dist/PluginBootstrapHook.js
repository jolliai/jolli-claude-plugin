#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var sp=Object.create;var lr=Object.defineProperty;var ap=Object.getOwnPropertyDescriptor;var lp=Object.getOwnPropertyNames;var cp=Object.getPrototypeOf,up=Object.prototype.hasOwnProperty;var w=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var S=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},Ni=(t,e)=>{for(var r in e)lr(t,r,{get:e[r],enumerable:!0})},ji=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of lp(e))!up.call(t,o)&&o!==r&&lr(t,o,{get:()=>e[o],enumerable:!(n=ap(e,o))||n.enumerable});return t};var Pn=(t,e,r)=>(r=t!=null?sp(cp(t)):{},ji(e||!t||!t.__esModule?lr(r,"default",{value:t,enumerable:!0}):r,t)),dp=t=>ji(lr({},"__esModule",{value:!0}),t);function Fi(){return fp.getStore()?.traceId}var Hi,zw,fp,Ji=w(()=>{"use strict";Hi=require("node:async_hooks"),zw="0".repeat(32),fp=new Hi.AsyncLocalStorage});function _(t){return t instanceof Error?t.message:String(t)}function ur(t){Ui=t}function bp(t,e){let r=wp[e]??yp;return qi[t]>=qi[r]}function kp(t,e,r,n,o){let i=new Date().toISOString(),s=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,u=>{if(l>=n.length)return u;let d=n[l++];return u==="%d"?String(Number(d)):u==="%j"?JSON.stringify(d):String(d)});let c=o?` [trace=${o}]`:"";return`[${i}] ${s} [${e}]${c} ${a}`}function oe(t){let e=t??Ui??process.cwd();return(0,st.join)(e,mp,hp)}function Pt(t){return String(t).padStart(2,"0")}async function xp(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${Pt(r.getUTCMonth()+1)}-${Pt(r.getUTCDate())}_${Pt(r.getUTCHours())}-${Pt(r.getUTCMinutes())}-${Pt(r.getUTCSeconds())}`;try{let o=(0,st.join)(t,`debug_${n}.log`);for(let i=1;await Cp(o);i++)o=(0,st.join)(t,`debug_${n}_${i}.log`);await(0,ne.rename)(e,o)}catch{return}try{let o=(await(0,ne.readdir)(t)).filter(i=>Rp.test(i)).sort();for(let i=0;i<o.length-vp;i++)await(0,ne.unlink)((0,st.join)(t,o[i])).catch(()=>{})}catch{}}async function Cp(t){try{return await(0,ne.stat)(t),!0}catch{return!1}}function Pp(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||(Bi=Bi.then(async()=>{try{let e=oe(),r=(0,st.join)(e,gp);await(0,ne.stat)(e);try{(await(0,ne.stat)(r)).size>Ep&&await xp(e,r)}catch{}await(0,ne.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function f(t){function e(r,n,o){let i=kp(r,t,n,o,Fi());Sp&&(r==="info"||r==="debug")||(r==="warn"?console.warn(i):console.error(i)),bp(r,t)&&Pp(i)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var ne,st,mp,hp,gp,ee,Ui,qi,yp,wp,Sp,Bi,Ep,vp,Rp,y=w(()=>{"use strict";ne=require("node:fs/promises"),st=require("node:path");Ji();mp=".jolli",hp="jollimemory",gp="debug.log";ee="jollimemory/summaries/v3";qi={debug:0,info:1,warn:2,error:3},yp="info",wp={},Sp=!0;Bi=Promise.resolve(),Ep=2*1024*1024,vp=10,Rp=/^debug_.*\.log$/});function at(t,e,r){return(0,Wi.promisify)(Ee.execFile)(t,e,{...It,...r??{}})}function Tt(t,e,r){return(0,Ee.execFileSync)(t,e,{...It,...r??{}})}function Gi(t,e,r){return(0,Ee.spawnSync)(t,e,{...It,...r??{}})}var Ee,Wi,It,dr,We=w(()=>{"use strict";Ee=require("node:child_process"),Wi=require("node:util"),It={windowsHide:!0};dr=((t,e,r)=>Array.isArray(e)?(0,Ee.spawn)(t,e,{...It,...r??{}}):(0,Ee.spawn)(t,{...It,...e??{}}))});async function U(t,e){F.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await at("git",t,{maxBuffer:Tp,...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,i={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return F.debug("git command failed (exit: %d, stderr: %s)",o,i.stderr.substring(0,200)),i}}async function fr(t,e){return(await U(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function In(t,e){if(await fr(t,e))return;F.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await Dp(r,e);F.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,i=await $p(o,e);F.debug("Created tree: %s",i);let s=await U(["commit-tree",i,"-m","Initialize Jolli Memory summaries"],e);if(s.exitCode!==0)throw new Error(`Failed to create commit: ${s.stderr}`);let a=s.stdout.trim();F.debug("Created commit: %s",a);let l=await U(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);F.info("Orphan branch '%s' created successfully",t)}async function At(t,e,r){F.debug("Reading file from branch: %s:%s",t,e);let n=await U(["show",`${t}:${e}`],r);return n.exitCode!==0?(F.debug("File not found: %s:%s",t,e),null):n.stdout}async function Xi(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return F.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((i,s)=>{let a=dr("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),u=!0,d=0,m=[],p=!1,C=0,A=!1,O=k=>{A||(A=!0,k?s(k):i(n))};a.stderr.on("data",k=>{l+=k.toString()}),a.stdout.on("data",k=>{for(c=Buffer.concat([c,k]);!A;){if(u){let D=c.indexOf(10);if(D<0)return;let $=c.subarray(0,D).toString("utf8");if(c=c.subarray(D+1),C>=e.length){O(new Error(`git cat-file --batch returned extra response: ${$}`));return}let K=e[C];if(C++,$.endsWith(" missing")){n.set(K,null);continue}let Z=$.substring($.lastIndexOf(" ")+1),H=Number.parseInt(Z,10);if(!Number.isFinite(H)||H<0){O(new Error(`Unexpected cat-file --batch header for ${K}: ${$}`));return}d=H,m=[],u=!1,p=!0}if(d>0){if(c.length===0)return;let D=Math.min(d,c.length);if(m.push(c.subarray(0,D)),c=c.subarray(D),d-=D,d>0)return}if(p){if(c.length<1)return;c=c.subarray(1),p=!1;let D=e[C-1];n.set(D,Buffer.concat(m).toString("utf8")),m=[],u=!0}}}),a.on("close",k=>{if(k!==0){O(new Error(`git cat-file --batch failed (exit ${k}): ${l.trim()}`));return}if(C<e.length){O(new Error(`git cat-file --batch returned ${C} of ${e.length} expected responses; stderr=${l.trim()}`));return}O(null)}),a.on("error",k=>{O(k)}),a.stdin.on("error",k=>{O(k)});for(let k of e)a.stdin.write(`${t}:${k}
`);a.stdin.end()})}async function Yi(t,e,r,n){await In(t,n);let o=await U(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let i=o.stdout.trim();await _p(t,i,r,e,n);let s=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;F.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,s,a)}async function Qi(t,e,r){F.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await U(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return F.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(Ap).filter(i=>i.length>0);return F.debug("Found %d files",o.length),o}async function mr(t){return(await U(["rev-parse","--git-dir"],t)).exitCode===0}async function lt(t){let e=await U(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}async function Dt(t){let e=(0,_e.join)(t,".git");if((await(0,pr.stat)(e)).isDirectory())return(0,_e.join)(e,"hooks");let n=await(0,pr.readFile)(e,"utf-8"),o=n.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${n.trim()}`);let i=o[1].trim(),s=(0,_e.resolve)(t,i),a=s.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=s.substring(0,a);return(0,_e.join)(l,"hooks")}return(0,_e.join)(s,"hooks")}function Zi(t,e,r){return F.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let i=dr("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),s="",a="";i.stdout.on("data",l=>{s+=l.toString()}),i.stderr.on("data",l=>{a+=l.toString()}),i.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(s.trim())}),i.on("error",l=>{o(l)}),i.stdin.write(e),i.stdin.end()})}async function Dp(t,e){return Zi(["hash-object","-w","--stdin"],t,e)}async function Vi(t,e){let r=await U(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function _p(t,e,r,n,o){let i=await Vi("GIT_AUTHOR_IDENT",o),s=await Vi("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];F.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(u=>!u.delete),c=n.filter(u=>u.delete);return new Promise((u,d)=>{let m=dr("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),p="";m.stderr.on("data",k=>{p+=k.toString()}),m.on("close",k=>{k!==0?d(new Error(`git fast-import failed (exit ${k}): ${p.trim()}`)):u()}),m.on("error",k=>{d(k)});let C=m.stdin;C.on("error",k=>{d(k)});let A=[];l.forEach((k,D)=>{let $=D+1,K=Buffer.from(k.content,"utf8");A.push(`blob
mark :${$}
data ${K.length}
`,K,`
`)});let O=Buffer.from(r,"utf8");A.push(`commit refs/heads/${t}
`,`author ${i}
`,`committer ${s}
`,`data ${O.length}
`,O,`
`,`from ${e}
`),l.forEach((k,D)=>{A.push(`M 100644 :${D+1} ${Ki(k.path)}
`)});for(let k of c)A.push(`D ${Ki(k.path)}
`);A.push(`done
`),Op(C,A).then(()=>{C.end()},k=>{d(k)})})}async function Op(t,e){for(let r of e)t.write(r)||await(0,zi.once)(t,"drain")}function Ki(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function $p(t,e){return Zi(["mktree"],t,e)}var zi,pr,_e,Tp,Ap,F,ye=w(()=>{"use strict";zi=require("node:events"),pr=require("node:fs/promises"),_e=require("node:path");y();We();Tp=10*1024*1024,Ap="\0",F=f("GitOps")});function Mp(t){return new Promise(e=>setTimeout(e,t))}function Lp(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function Tn(t){try{let e=await(0,we.stat)(t),r=Date.now()-e.mtimeMs,n=await ts(t),o=n!==null&&!Lp(n);if(!o&&r<es)return!1;o?_t.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):_t.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,we.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return _t.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,we.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function ts(t){try{let r=(await(0,we.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function Ot(t,e){let r=await ts(t);if(r!==null&&r!==String(process.pid)){_t.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,we.rm)(t,{force:!0})}catch(n){_t.error("Failed to release %s: %s",e,n.message)}}async function $t(t,e){if(e.timeoutMs<=0)return Tn(t);let r=Date.now()+e.timeoutMs;for(;;){if(await Tn(t))return!0;if(Date.now()>=r)return!1;await Mp(e.pollMs)}}var we,_t,es,rs=w(()=>{"use strict";we=require("node:fs/promises");y();_t=f("LockPrimitives"),es=300*1e3});function jp(t){return at("git",["rev-parse","--git-common-dir"],{cwd:t})}async function cs(t){let e=t??process.cwd(),r=ss.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await jp(e),i=o.trim(),s=(0,ie.isAbsolute)(i)?i:(0,ie.resolve)(e,i);n=(0,ie.join)(s,"jollimemory")}catch{Np.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=oe(e)}return ss.set(e,n),n}async function Dn(t){let e=await cs(t);return await(0,hr.mkdir)(e,{recursive:!0}),e}async function _n(t,e={}){let r=e.timeoutMs??Hp,n=e.pollMs??Fp,o=await Dn(t);return $t((0,ie.join)(o,ls),{timeoutMs:r,pollMs:n})}async function On(t){let e=await cs(t);await Ot((0,ie.join)(e,ls),"orphan-write.lock")}async function Mt(t,e={}){let r=e.timeoutMs??qp,n=e.pollMs??An,o=await Dn(t),i=(0,ie.join)(o,os);return await $t(i,{timeoutMs:r,pollMs:n})?{release:()=>Ot(i,os)}:null}async function $n(t,e,r={}){let n=await Mt(t,r);if(!n)return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await n.release()}}async function Mn(t,e,r={}){let n=r.timeoutMs??Jp,o=r.pollMs??An,i=await Dn(t),s=(0,ie.join)(i,ns);if(!await $t(s,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await Ot(s,ns)}}async function Ln(t,e={}){let r=e.timeoutMs??Bp,n=e.pollMs??An,o=e.globalDir??(0,ie.join)((0,as.homedir)(),".jolli","jollimemory");await(0,hr.mkdir)(o,{recursive:!0});let i=(0,ie.join)(o,is);if(!await $t(i,{timeoutMs:r,pollMs:n}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Ot(i,is)}}var hr,as,ie,Np,ls,ns,os,is,Hp,Fp,Jp,An,qp,Bp,ss,Ge=w(()=>{"use strict";hr=require("node:fs/promises"),as=require("node:os"),ie=require("node:path");y();We();rs();Np=f("Locks");ls="orphan-write.lock",ns="profile.lock",os="repo-hooks.lock",is="runtime-registry.lock",Hp=1e3,Fp=50,Jp=5e3,An=25,qp=5e3,Bp=5e3,ss=new Map});var Hn=w(()=>{"use strict"});async function P(t,e){let r=`${t}.${process.pid}.${(0,fs.randomUUID)()}.tmp`;await(0,Ke.writeFile)(r,e,"utf-8");try{await(0,Ke.rename)(r,t)}catch(n){let o=n.code;if(o==="EPERM"||o==="EACCES")await(0,Ke.writeFile)(t,e,"utf-8"),await(0,Ke.rm)(r,{force:!0});else throw n}}var fs,Ke,ve=w(()=>{"use strict";fs=require("node:crypto"),Ke=require("node:fs/promises")});function te(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var Fn=w(()=>{"use strict"});var ms=w(()=>{"use strict"});var hs=w(()=>{"use strict"});function gs(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function ys(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return gs(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return gs(o)?String.fromCodePoint(o):e}let n=Xp[r];return typeof n=="string"?n:e})}var Xp,ws=w(()=>{"use strict";Xp={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var Yp,Ss,bs=w(()=>{"use strict";ms();Fn();hs();ws();Yp={decodeHtmlEntities:ys,lowercase:t=>t.toLowerCase()},Ss=new Set(Object.keys(Yp))});var Qp,ks,Es=w(()=>{"use strict";Qp="^https://app\\.asana\\.com/",ks={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:Qp,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Zp,vs,Rs=w(()=>{"use strict";Zp="^https://[^/]+/wiki/",vs={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:Zp},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var ef,xs,Cs=w(()=>{"use strict";ef="^/[^/\\s]+/[^/\\s]+",xs={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:ef},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var tf,rf,Ps,Is=w(()=>{"use strict";tf="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",rf="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",Ps={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:tf,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:rf,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var nf,Ts,As=w(()=>{"use strict";nf="^[A-Z][A-Z0-9_]*-\\d+$",Ts={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:nf},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var of,Ds,_s=w(()=>{"use strict";of="^[A-Z][A-Z0-9_]*-\\d+$",Ds={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:of},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Os,$s=w(()=>{"use strict";Os={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var sf,af,lf,Ms,Ls=w(()=>{"use strict";sf="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",af="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[^/]+\\.notion\\.site)/",lf="<content\\b[^>]*>([\\s\\S]*?)</content>",Ms={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:sf,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:af,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:lf,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Ns,js=w(()=>{"use strict";Ns={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var Hs,Fs=w(()=>{"use strict";Hs={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Js,qs=w(()=>{"use strict";Js={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var Bs,Us=w(()=>{"use strict";Es();Rs();Cs();Is();As();_s();$s();Ls();js();Fs();qs();Bs=[Ds,vs,Ts,Ps,Ms,Ns,Js,Hs,ks,Os,xs]});function uf(t,e,r){if(!te(t))return"op must be an object";if(r.opCount++,r.opCount>Ws)return`pipe exceeds ${Ws} ops`;let n=t.op;if(typeof n!="string"||!cf.has(n))return`unknown op: ${String(n)}`;switch(n){case"path":return typeof t.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof t.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof t.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof t.pattern!="string"?"regex op requires a string 'pattern'":t.extract!==void 0&&typeof t.extract!="string"?"regex.extract must be a string":t.lastMatch!==void 0&&typeof t.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof t.fn!="string"?"transform op requires a string 'fn'":Ss.has(t.fn)?void 0:`unknown transform: ${t.fn}`;case"coalesce":{if(e+1>gr)return`nesting depth exceeds ${gr}`;if(!Array.isArray(t.of))return"coalesce op requires an array 'of'";for(let o of t.of){let i=Jn(o,e+1,r);if(i!==void 0)return i}return}case"template":{if(e+1>gr)return`nesting depth exceeds ${gr}`;if(typeof t.template!="string")return"template op requires a string 'template'";if(!te(t.from))return"template op requires an object 'from'";for(let o of Object.values(t.from)){let i=Jn(o,e+1,r);if(i!==void 0)return i}return}}}function Jn(t,e,r){if(!Array.isArray(t))return"pipe must be an array";for(let n of t){let o=uf(n,e,r);if(o!==void 0)return o}}function yr(t,e){let r=Jn(t,0,{opCount:0});return r===void 0?void 0:`${e}: ${r}`}function df(t){if(!te(t))return{ok:!1,error:"definition must be an object"};if(typeof t.id!="string"||t.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof t.label!="string"||t.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof t.icon!="string"||t.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(!te(t.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(t.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!te(t.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(t.fields))return{ok:!1,error:"fields must be an array"};if(!te(t.storage))return{ok:!1,error:"storage must be an object"};if(!te(t.render))return{ok:!1,error:"render must be an object"};let e=t.reference;for(let r of["nativeId","title","url"]){let n=e[r];if(!te(n))return{ok:!1,error:`reference.${r} is required`};let o=yr(n.pipe,`reference.${r}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(e.description!==void 0){if(!te(e.description))return{ok:!1,error:"reference.description must be an object"};let r=yr(e.description.pipe,"reference.description.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.guard!==void 0){if(!te(e.guard))return{ok:!1,error:"reference.guard must be an object"};let r=yr(e.guard.pipe,"reference.guard.pipe");if(r!==void 0)return{ok:!1,error:r}}for(let[r,n]of t.fields.entries()){if(!te(n))return{ok:!1,error:`fields[${r}] must be an object`};if(typeof n.key!="string"||!Gs.test(n.key))return{ok:!1,error:`fields[${r}].key must match ${Gs}`};if(typeof n.label!="string"||n.label.length===0)return{ok:!1,error:`fields[${r}].label must be a non-empty string`};let o=yr(n.pipe,`fields[${r}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:t}}function Sr(){if(wr!==void 0)return wr;let t=[];for(let e of Bs){let r=df(e);if(!r.ok)throw new Error(`invalid built-in source definition '${e.id}': ${r.error}`);t.push(r.def)}return wr=new qn(t),wr}var Ws,gr,cf,Gs,qn,wr,br=w(()=>{"use strict";Fn();bs();Us();Ws=64,gr=8,cf=new Set(["path","coalesce","regex","template","join","const","transform"]);Gs=/^[\w-]+$/;qn=class{constructor(e){this.definitions=e}all(){return this.definitions}byId(e){return this.definitions.find(r=>r.id===e)}match(e,r,n){return e==="claude"?this.definitions.find(o=>{let i=o.match.claude;return!(i===void 0||!i.prefixes.some(s=>r.startsWith(s))||i.acceptSuffix!==void 0&&!r.endsWith(i.acceptSuffix)||i.denySuffixes?.some(s=>r.endsWith(s)))}):n!==void 0?this.definitions.find(o=>{let i=o.match.codex;return i!==void 0&&i.namespaceSuffix===n&&i.functionCallNames.includes(r)}):this.definitions.find(o=>o.match.codex?.invocationTools.includes(r))}}});var rb,Bn=w(()=>{"use strict";y();br();rb=f("ReferenceStore")});async function Vn(t){let e=oe(t);return await(0,me.mkdir)(e,{recursive:!0}),e}async function Ys(t,e){let r=await Vn(e),o={...(await gf(r)).sessions};o[t.sessionId]=t;let{activeSessions:i,stalePaths:s}=wf(o),a={version:1,sessions:i};await P((0,Oe.join)(r,Ks),JSON.stringify(a,null,"	")),s.length>0&&await Sf(r,s)}async function mf(t,e,r){await P((0,Oe.join)(e,r),JSON.stringify(t,null,"	"))}function $e(){return(0,Oe.join)((0,Vs.homedir)(),".jolli","jollimemory")}async function Lt(t){let e=(0,Oe.join)(t,Xs);try{let r=await(0,me.readFile)(e,"utf-8"),n=JSON.parse(r);return hf(n)}catch{return Gn.debug("No config file found in %s, using defaults",t),{}}}function hf(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}async function kr(t,e){await(0,me.mkdir)(e,{recursive:!0});let n={...await Lt(e),...t};await P((0,Oe.join)(e,Xs),JSON.stringify(n,null,"	")),Gn.info("Config saved to %s",e)}async function Se(){return Lt($e())}async function Re(t){return kr(t,$e())}async function gf(t){let e=(0,Oe.join)(t,Ks);try{let r=await(0,me.readFile)(e,"utf-8");return JSON.parse(r)}catch{return{version:1,sessions:{}}}}async function yf(t,e=zs){let r=(0,Oe.join)(t,e);try{let n=await(0,me.readFile)(r,"utf-8");return JSON.parse(n)}catch{return{version:1,cursors:{}}}}function wf(t){let e=Date.now(),r={},n=[];for(let[o,i]of Object.entries(t)){let s=e-new Date(i.updatedAt).getTime();s>ff?(Gn.info("Pruning stale session %s (age: %dh)",o,Math.round(s/36e5)),n.push(i.transcriptPath)):r[o]=i}return{activeSessions:r,stalePaths:n}}async function Sf(t,e){let r=new Set(e);for(let n of[zs,pf]){let i={...(await yf(t,n)).cursors},s=0;for(let a of Object.keys(i))r.has(a)&&(delete i[a],s++);s>0&&await mf({version:1,cursors:i},t,n)}}function Un(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function Qs(t){let e=!1,r={};for(let[s,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=Un(a,bf);l.changed&&(e=!0),r[s]=l.value}let n;if(t.notes!==void 0){n={};for(let[s,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=Un(a,kf);l.changed&&(e=!0),n[s]=l.value}}let o;if(t.references!==void 0){o={};for(let[s,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=Un(a,Ef);c.changed&&(e=!0),o[s]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{}},changed:e}}var Wn,me,Vs,Oe,Gn,Ks,zs,pf,Xs,ff,pb,fb,mb,bf,kf,Ef,ze=w(()=>{"use strict";Wn=require("node:crypto"),me=require("node:fs/promises"),Vs=require("node:os"),Oe=require("node:path");y();Hn();ve();Ge();Bn();Gn=f("SessionTracker"),Ks="sessions.json",zs="cursors.json",pf="discovery-cursors.json",Xs="config.json",ff=2880*60*1e3;pb=2880*60*1e3,fb=10080*60*1e3,mb=(0,Wn.randomBytes)(4).toString("hex");bf=["ignored","editCount"],kf=["ignored"],Ef=["ignored","commitHash","contentHashAtCommit"]});function Pr(t){return t.replace(/\\/g,"/")}var Ze=w(()=>{"use strict"});var Me,Mr,Ha=w(()=>{"use strict";y();Me=f("DualWriteStorage"),Mr=class{constructor(e,r){this.primary=e;this.shadow=r}get kbRoot(){return this.shadow.kbRoot}async readFile(e){return this.primary.readFile(e)}async batchReadFiles(e){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await this.primary.readFile(n));return r}async writeFiles(e,r){await this.primary.writeFiles(e,r);try{await this.shadow.writeFiles(e,r),this.shadow.clearDirty?.()}catch(n){Me.warn("Shadow write failed (folder storage): %s",n instanceof Error?n.message:String(n)),this.shadow.markDirty?.(r)}}async deleteVisibleMarkdown(e){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return Me.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,_(r)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${e.branch}/${n}`),!1}}async regenerateVisibleMarkdown(e){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return Me.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,_(r)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${e.branch}/${n}`),!1}}async deletePlanVisible(e,r){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(e,r)}catch(n){Me.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",e,r,_(n)),this.shadow.markDirty?.(`deletePlanVisible ${r}/${e}`)}}async deleteNoteVisible(e,r){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(e,r)}catch(n){Me.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",e,r,_(n)),this.shadow.markDirty?.(`deleteNoteVisible ${r}/${e}`)}}async pruneBranchMappings(e){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(e)}catch(r){return Me.warn("Shadow pruneBranchMappings failed (folder storage): %s",_(r)),this.shadow.markDirty?.(`pruneBranchMappings ${e.length}`),0}}async healMissingVisibleMarkdown(e){let r=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!r)return{healed:0,skipped:0,failed:0};let n=e?.dropOrphanedManifestEntries??!0,o=r===this.shadow?"shadow":"primary";try{return await r.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:n})??{healed:0,skipped:0,failed:0}}catch(i){let s=i?.code,a=s?`[${s}] ${_(i)}`:_(i);return Me.warn("%s healMissingVisibleMarkdown failed: %s",o,a),r.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(e){return this.primary.listFiles(e)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(e){Me.warn("Shadow ensure failed: %s",e instanceof Error?e.message:String(e))}}async renderTopicWiki(e){await this.shadow.renderTopicWiki?.(e)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}}});function Qf(t,e){if(!(0,ge.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${e}`);if(!(0,ge.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${t}`);let r=(0,ge.relative)(t,e);if(r===""||r.startsWith("..")||(0,ge.isAbsolute)(r))throw new Error(`assertNoSymlinksInPathSync: target ${e} is not inside vault ${t}`);let n=r.split(ge.sep),o=t;for(let i=0;i<n.length-1;i++){let s=n[i];if(s===void 0||s.length===0)continue;o=`${o}${ge.sep}${s}`;let a;try{a=(0,L.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw Yf.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${e}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${e}).`)}}function po(t,e,r){Qf(t,e),(0,L.mkdirSync)((0,ge.dirname)(e),{recursive:!0});let n=`${e}.tmp`,o=L.constants.O_WRONLY|L.constants.O_CREAT|L.constants.O_TRUNC|L.constants.O_NOFOLLOW,i=(0,L.openSync)(n,o,420);try{typeof r=="string"?(0,L.writeSync)(i,r,void 0,"utf-8"):(0,L.writeSync)(i,r)}finally{(0,L.closeSync)(i)}(0,L.renameSync)(n,e)}var L,ge,Yf,Fa=w(()=>{"use strict";L=require("node:fs"),ge=require("node:path");y();Yf=f("Sync:VaultSymlinkGuard")});function qa(t){if((0,Ja.platform)()==="win32")try{Gi("attrib",["+h",t],{timeout:2e3})}catch{}}var Ja,Ba=w(()=>{"use strict";Ja=require("node:os");We()});var Ua,M,re,ut,z,Lr=w(()=>{"use strict";Ua=require("node:crypto"),M=require("node:fs"),re=require("node:path");y();Ba();Ze();ut=f("MetadataManager"),z=class t{constructor(e){this.jolliDir=e;this.manifestPath=(0,re.join)(e,"manifest.json"),this.branchesPath=(0,re.join)(e,"branches.json"),this.configPath=(0,re.join)(e,"config.json"),this.migrationPath=(0,re.join)(e,"migration.json"),this.indexPath=(0,re.join)(e,"index.json")}ensure(){(0,M.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&qa(this.jolliDir),(0,M.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,M.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,M.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e.fileId);n.push(e),this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),ut.info("Manifest updated: %s (%s)",e.path,e.type)}removeFromManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e);return n.length===r.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),!0)}unregisterFilesByType(e){let r=this.readManifest(),n=r.files.filter(i=>i.type!==e),o=r.files.length-n.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),ut.info("Manifest unregistered %d entries of type=%s",o,e),o)}replaceFiles(e){let r=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:[...e]},null,"	"))}findByPath(e){return this.readManifest().files.find(r=>r.path===e)}findById(e){return this.readManifest().files.find(r=>r.fileId===e)}updatePath(e,r){let n=this.readManifest();if(!n.files.find(s=>s.fileId===e))return!1;let i=n.files.map(s=>s.fileId===e?{...s,path:r}:s);return this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),!0}resolveFolderForBranch(e){let r=this.readBranches(),n=r.mappings.find(a=>a.branch===e);if(n)return n.folder;let o=t.transcodeBranchName(e),i={folder:o,branch:e,createdAt:new Date().toISOString()},s={...r,mappings:[...r.mappings,i]};return this.atomicWrite(this.branchesPath,JSON.stringify(s,null,"	")),ut.info("Branch mapping created: %s \u2192 %s",e,o),o}removeBranchMapping(e){let r=this.readBranches(),n=r.mappings.filter(o=>o.branch!==e);return n.length===r.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:n},null,"	")),ut.info("Branch mapping removed: %s (no remaining head)",e),!0)}renameBranchFolder(e,r){let n=this.readBranches(),o=n.mappings.map(l=>l.folder===e?{...l,folder:r}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	"));let i=this.readManifest(),s=0,a=i.files.map(l=>l.path.startsWith(`${e}/`)?(s++,{...l,path:l.path.replace(`${e}/`,`${r}/`)}):l);return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...i,files:a},null,"	")),s}removeBranchFolder(e){let r=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:r.mappings.filter(s=>s.folder!==e)},null,"	"));let n=this.readManifest(),o=n.files.filter(s=>!s.path.startsWith(`${e}/`)),i=n.files.length-o.length;return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:o},null,"	")),i}unregisterBranches(e){let r=new Set(e);if(r.size===0)return 0;let n=this.readBranches(),o=n.mappings.filter(s=>!r.has(s.branch)),i=n.mappings.length-o.length;return i===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	")),ut.info("Branch mappings unregistered: %d",i),i)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(e){try{return this.listBranchMappings().find(r=>r.folder===e)?.branch??e}catch{return e}}listIndexHeads(){let e=this.readJson(this.indexPath);return!e||!Array.isArray(e.entries)?[]:e.entries.filter(r=>typeof r?.commitHash=="string"&&typeof r.branch=="string"&&(r.parentCommitHash===null||typeof r.parentCommitHash=="string")&&r.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(e){this.atomicWrite(this.configPath,JSON.stringify(e,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(e){this.atomicWrite(this.migrationPath,JSON.stringify(e,null,"	"))}reconcile(e){let r=this.readManifest();if(r.files.length===0||!r.files.some(a=>!(0,M.existsSync)((0,re.join)(e,a.path))))return 0;let o=new Map;try{this.walkDir(e,e,o)}catch{}let i=0,s=[];for(let a of r.files){let l=(0,re.join)(e,a.path);if((0,M.existsSync)(l))s.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(s.push({...a,path:c}),i++):(ut.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),s.push(a))}}return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),i}walkDir(e,r,n){for(let o of(0,M.readdirSync)(e,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let i=(0,re.join)(e,o.name);if(o.isDirectory())this.walkDir(i,r,n);else if(o.name.endsWith(".md"))try{let s=(0,M.readFileSync)(i,"utf-8"),a=t.sha256(s);n.set(a,Pr((0,re.relative)(r,i)))}catch{}}}static transcodeBranchName(e){let r=e.replace(/[/\\:*?~^]/g,"-");return r=r.replace(/-{3,}/g,"-"),r=r.replace(/\.\./g,"--"),r=r.replace(/^[.-]+|[.-]+$/g,""),r||"default"}static sha256(e){return(0,Ua.createHash)("sha256").update(e,"utf-8").digest("hex")}readJson(e){if(!(0,M.existsSync)(e))return null;try{return JSON.parse((0,M.readFileSync)(e,"utf-8"))}catch{return null}}atomicWrite(e,r){let n=(0,re.dirname)(e);(0,M.mkdirSync)(n,{recursive:!0});let o=`${e}.tmp`;(0,M.writeFileSync)(o,r,"utf-8"),(0,M.renameSync)(o,e)}}});function Le(t){return t.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function Wa(t){return t.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function Nr(t){return t.replace(/[()\s<>"]/g,e=>e==="("?"%28":e===")"?"%29":encodeURIComponent(e))}var Ga=w(()=>{"use strict"});function em(t){return Zf.has(t)}function fo(t){return em(t.source)?`${t.nativeId} \u2014 ${t.title}`:t.title}var Zf,mo=w(()=>{"use strict";br();Zf=new Set(["linear","jira","github"])});function jr(t){return t.version>=4}function tm(t){return[...t??[]].reverse()}function dt(t){let e=tm(t.children).flatMap(dt),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function Va(t){let e=t.stats,r=e?.filesChanged??0,n=e?.insertions??0,o=e?.deletions??0;for(let i of t.children??[]){let s=Va(i);r+=s.filesChanged,n+=s.insertions,o+=s.deletions}return{filesChanged:r,insertions:n,deletions:o}}function qt(t){return t.diffStats?t.diffStats:(t.children?.length??0)>0?Va(t):t.stats??{filesChanged:0,insertions:0,deletions:0}}function ho(t){let e=t.conversationTurns??0,r=(t.children??[]).reduce((n,o)=>n+ho(o),0);return e+r}function go(t){let e=t.conversationTokens??0,r=(t.children??[]).reduce((n,o)=>n+go(o),0);return e+r}function yo(t){let e=t.conversationTokenBreakdown,r={input:e?.input??0,output:e?.output??0,cached:e?.cached??0};return(t.children??[]).reduce((n,o)=>{let i=yo(o);return{input:n.input+i.input,output:n.output+i.output,cached:n.cached+i.cached}},{input:r.input,output:r.output,cached:r.cached})}function Hr(t){let e=[],r=n=>{if(!n.children?.length)e.push(n);else for(let o of n.children)r(o)};for(let n of t.children??[])r(n);return e}function wo(t){return jr(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):dt(t)}function So(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...So(r));return e}function rm(t){let e=Hr(t);return e.length<=1?1:new Set(e.map(n=>new Date(n.generatedAt||n.commitDate).toISOString().substring(0,10))).size}function Ka(t){let e=rm(t),r=e===1?"1 day":`${e} days`,n=Hr(t);if(n.length<=1)return r;let o=n.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),i=new Date(Math.min(...o)),s=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${r} (${a(i)} \u2014 ${a(s)})`}var pt=w(()=>{"use strict"});function J(t){return t.generatedAt||t.commitDate}function Ya(t){try{return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function bo(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return t}}function za(t){return t.substring(0,10)}function nm(t){return[...t].sort((e,r)=>{let n=za(e.generatedAt||e.commitDate||""),o=za(r.generatedAt||r.commitDate||"");if(n!==o)return n>o?-1:1;let i=e.importance==="minor"?1:0,s=r.importance==="minor"?1:0;return i-s})}function Qa(t){return String(t+1).padStart(2,"0")}function om(t){let e=new Set,r=n=>{n.llm?.source&&e.add(n.llm.source);for(let o of n.children??[])r(o)};return r(t),[...e]}function Za(t){let e=om(t);if(e.length!==0)return e.length===1?Xa[e[0]]:`mixed: ${e.map(r=>Xa[r]).join(", ")}`}function el(t){let e=Hr(t),r=wo(t);return{topics:nm(r.map((o,i)=>({...o,treeIndex:i}))),sourceNodes:e}}var Xa,Fr=w(()=>{"use strict";mo();pt();Xa={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"}});function Bt(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function rl(t){return t>=.01?`$${t.toFixed(2)}`:t>=5e-5?`$${t.toFixed(4)}`:t>0?"<$0.0001":"$0.00"}function nl(t,e){return t?t.input*tl+t.output*im+t.cached*sm:e*tl}var tl,im,sm,ol=w(()=>{"use strict";tl=3/1e6,im=15/1e6,sm=3.75/1e6});function vo(t){let{topics:e,sourceNodes:r}=el(t),n=[];return am(n,t),pm(n,t,{withRelevance:!0}),lm(n,t),fm(n,t.e2eTestGuide),mm(n,r),gm(n,e,hm),ym(n),n.join(`
`)}function am(t,e){let r=qt(e),n=r.filesChanged,o=ho(e),i=`${n} file${n!==1?"s":""} changed, +${r.insertions} insertions, \u2212${r.deletions} deletions`,s=bo(J(e));t.push(`# ${e.commitMessage}`,"",`- **Commit:** \`${e.commitHash}\``,`- **Branch:** \`${e.branch}\``,`- **Author:** ${e.commitAuthor}`,`- **Date:** ${s}`,`- **Duration:** ${Ka(e)}`,`- **Changes:** ${i}`),o>0&&t.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=go(e);if(a>0){let c=yo(e),u=c.input>0||c.output>0||c.cached>0?c:void 0,d=rl(nl(u,a)),m=u?` (${Bt(u.input)} input, ${Bt(u.output)} output, ${Bt(u.cached)} cached)`:"";t.push(`- **Task usage:** ${Bt(a)} tokens \xB7 ${d}${m}`)}let l=e.jolliDocUrl;l&&t.push(`- **Jolli Memory:** [${l}](${l})`),t.push("","---")}function lm(t,e){let r=e.recap?.trim();r&&t.push("","## Quick recap","",r,"","---")}function cm(t){let e=new Map;for(let o of t){let i=e.get(o.source)??[];i.push(o),e.set(o.source,i)}let r=Sr().all().map(o=>o.id),n=[];for(let o of r){let i=e.get(o);i&&(n.push(...i),e.delete(o))}for(let o of e.values())n.push(...o);return n}function ko(t,e,r){return t.get(`${e}:${r}`)??t.get(`${e}:${r.replace(um,"")}`)}function Eo(t){return!t||t.reason===""?"":` \u2014 ${dm[t.tier]} \xB7 ${Le(t.reason)}`}function pm(t,e,r){let n=e.plans??[],o=e.notes??[],i=r?.includeReferences?e.references??[]:[],s=r?.withRelevance?e.excludedContext??[]:[],a=new Map;if(r?.withRelevance)for(let u of e.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=n.length+o.length+i.length;if(l===0&&s.length===0)return;let c=l>1?` (${l})`:"";t.push("",`## Context${c}`,"");for(let u of n){let d=u.jolliPlanDocUrl,m=Eo(ko(a,"plan",u.slug));t.push((d?`- [${Le(u.title)}](${Nr(d)})`:`- ${Le(u.title)}`)+m)}for(let u of o){let d=u.jolliNoteDocUrl,m=Eo(ko(a,"note",u.id));t.push((d?`- [${Le(u.title)}](${Nr(d)})`:`- ${Le(u.title)}`)+m)}for(let u of cm(i)){let d=Le(fo(u)),m=u.jolliReferenceDocUrl??u.url,p=Eo(ko(a,"reference",`${u.source}:${u.nativeId}`));t.push((m?`- [${d}](${Nr(m)})`:`- ${d}`)+p)}for(let u of s)t.push(`- ~~${Wa(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${Le(u.reason)}`:""}`)}function fm(t,e){if(!(!e||e.length===0)){t.push("",`## E2E Test (${e.length})`);for(let r=0;r<e.length;r++){let n=e[r];t.push("",`### ${r+1}. ${n.title}`),n.preconditions&&t.push("",`**Preconditions:** ${n.preconditions}`),t.push("","**Steps:**");for(let o=0;o<n.steps.length;o++)t.push(`${o+1}. ${n.steps[o]}`);t.push("","**Expected Results:**");for(let o of n.expectedResults)t.push(`- ${o}`)}t.push("","---")}}function mm(t,e){if(!(e.length<=1)){t.push("",`## Source Commits (${e.length})`);for(let r of e){let n=qt(r),o=r.conversationTurns?` \xB7 ${r.conversationTurns} turns`:"";t.push(`- \`${r.commitHash.substring(0,8)}\` ${r.commitMessage}  _(+${n.insertions} \u2212${n.deletions}${o} \xB7 ${Ya(J(r))})_`)}t.push("","---")}}function hm(t,e){if(t.push("","**\u26A1 Why This Change**","",e.trigger),t.push("","**\u{1F4A1} Decisions Behind the Code**","",e.decisions),t.push("","**\u2705 What Was Implemented**","",e.response),e.todo&&t.push("","**\u{1F4CB} Future Enhancements**","",e.todo),e.filesAffected&&e.filesAffected.length>0){t.push("","**\u{1F4C1} FILES**");for(let r of e.filesAffected)t.push(`- \`${r}\``)}}function gm(t,e,r,n={singular:"Summary",plural:"Summaries"}){if(e.length!==0){t.push("",`## ${e.length===1?n.singular:n.plural} (${e.length})`);for(let o=0;o<e.length;o++){let i=e[o],s=i.category?` \`${i.category}\``:"";t.push("",`### ${Qa(o)} \xB7 ${i.title}${s}`),r(t,i)}}}function ym(t,e){let r=bo(new Date().toISOString()),n=e?Za(e):void 0,o=n?` \xB7 via ${n}`:"";t.push("","---","",`*Generated by Jolli Memory \xB7 ${r}${o}*`)}var um,dm,il=w(()=>{"use strict";Ga();mo();br();Fr();pt();ol();um=/-[0-9a-f]{8}$/;dm={high:"High",mid:"Med",low:"Low"}});function al(t,e,r,n){let o=[];if(o.push(`# ${t.title}`),o.push(""),o.push(sl),o.push(""),o.push(`> **Source branches:** ${e.join(", ")}`),o.push(`> **Merged:** ${r}`),o.push(`> **Topic slug:** \`${t.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(t.content.trim()),o.push(""),t.keyDecisions&&t.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let i of t.keyDecisions)o.push(`- ${i}`);o.push("")}if(t.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let i of t.sourceCommits){let s=i.substring(0,8),a=n.resolveCommitVisiblePath(s),l=n.resolveCommitMessage(s);a&&l?o.push(`- ${Ro(s,wm(a))} \u2014 ${l}`):l?o.push(`- \`${s}\` \u2014 ${l}`):o.push(`- \`${s}\``)}o.push("")}if(t.relatedBranches&&t.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let i of t.relatedBranches){let s=n.resolveBranchFolder(i);s?o.push(`- ${Ro(i,`../${s}/`)}`):o.push(`- \`${i}\``)}o.push("")}return o.join(`
`)}function ll(t){return{title:t.title,stableSlug:t.stableSlug,content:t.content,...t.relatedBranches.length>0&&{relatedBranches:[...t.relatedBranches]},sourceCommits:t.sourceRefs.filter(e=>e.type==="summary").map(e=>e.id)}}function cl(t,e){let r=[];if(r.push(`# ${e.repoName} \xB7 Knowledge Wiki`),r.push(""),r.push(sl),r.push(""),r.push(`> **${t.length} topics** in the knowledge base`),r.push(""),t.length>0){r.push("## Topics"),r.push("");for(let n of t)r.push(`- ${Ro(n.title,`topic--${n.stableSlug}.md`)}`);r.push("")}return r.join(`
`)}function wm(t){return t.startsWith("./")?t.substring(2):t}function Ro(t,e){let r=t.replace(/[\\[\]]/g,"\\$&"),n=e.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${r}](${n})`}var sl,ul=w(()=>{"use strict";sl="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->"});var v,dl,R,E,Jr,pl=w(()=>{"use strict";v=require("node:fs"),dl=require("node:fs/promises"),R=require("node:path");y();Fa();Lr();Ze();il();ul();E=f("FolderStorage"),Jr=class t{constructor(e,r){this.rootPath=e;this.metadataManager=r}get vaultRoot(){return(0,R.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(e){let r=(0,R.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return null;try{return(0,v.readFileSync)(r,"utf-8")}catch{return null}}async writeFiles(e,r){await this.ensure();let n=0,o=0;for(let i of e)i.delete?this.deleteHiddenFile(i.path)&&o++:(this.writeHiddenFile(i.path,i.content),n++,i.path.startsWith("summaries/")&&i.path.endsWith(".json")&&this.generateSummaryMarkdown(i.content),i.path.startsWith("plans/")&&i.path.endsWith(".md")&&this.generatePlanMarkdown(i.path,i.content,i.branch),i.path.startsWith("notes/")&&i.path.endsWith(".md")&&this.generateNoteMarkdown(i.path,i.content,i.branch));E.info("Wrote %d files, deleted %d (%s)",n,o,r)}async listFiles(e){let r=(0,R.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return[];let n=(0,R.join)(this.rootPath,".jolli"),o=[];return this.walkDir(r,n,o),o.sort()}async exists(){return(0,v.existsSync)(this.rootPath)}async ensure(){(0,v.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(e){let r=(0,R.join)(this.rootPath,".jolli","shadow-status.json"),n={dirty:!0,lastFailedAt:new Date().toISOString(),message:e};try{po(this.vaultRoot,r,JSON.stringify(n,null,"	"))}catch(o){E.warn("markDirty suppressed: %s",_(o))}}clearDirty(){let e=(0,R.join)(this.rootPath,".jolli","shadow-status.json");try{(0,v.existsSync)(e)&&(0,v.unlinkSync)(e)}catch{}}isDirty(){let e=(0,R.join)(this.rootPath,".jolli","shadow-status.json");return(0,v.existsSync)(e)}async deleteVisibleMarkdown(e){let r=t.slugify(e.commitMessage),n=e.commitHash.substring(0,8);return this.deleteVisibleArtifact(e.commitHash,e.branch,`${r}-${n}.md`)}async deletePlanVisible(e,r){await this.deleteVisibleArtifact(`plan:${e}`,r,`plan--${e}.md`)}async deleteNoteVisible(e,r){await this.deleteVisibleArtifact(`note:${e}`,r,`note--${e}.md`)}async pruneBranchMappings(e){let r=new Map,n=new Set(e);for(let i of this.metadataManager.listBranchMappings())n.has(i.branch)&&r.set(i.branch,i.folder);let o=this.metadataManager.unregisterBranches(e);return o===0?0:(await Promise.all([...r.values()].map(i=>this.rmdirIfEmpty((0,R.join)(this.rootPath,i)))),o)}async rmdirIfEmpty(e){try{await(0,dl.rmdir)(e)}catch(r){let n=r.code;if(n==="ENOENT"||n==="ENOTEMPTY"||n==="EEXIST")return;E.warn("rmdir(%s) failed (non-fatal): %s",e,_(r))}}resolveBranchForFolder(e){return this.metadataManager.listBranchMappings().find(n=>n.folder===e)?.branch??null}async deleteVisibleArtifact(e,r,n){let o=this.metadataManager.findById(e),i=this.metadataManager.resolveFolderForBranch(r),s=o?.path??`${i}/${n}`,a=(0,R.join)(this.rootPath,s);if(!(0,v.existsSync)(a))return o&&this.metadataManager.removeFromManifest(e),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return E.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s),!1;try{return(0,v.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(e),E.info("Deleted visible MD: %s",s),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(e),!1;throw l}}async forceRegenerateVisibleMarkdown(e){let r=await this.readFile(`summaries/${e.commitHash}.json`);if(!r)return E.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",e.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(r)}catch(c){return E.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",e.commitHash.substring(0,8),_(c)),{ok:!1,reason:"malformed"}}let n=this.metadataManager.resolveFolderForBranch(e.branch),o=t.slugify(e.commitMessage),i=e.commitHash.substring(0,8),s=`${n}/${o}-${i}.md`,a=(0,R.join)(this.rootPath,s);if((0,v.existsSync)(a))try{(0,v.unlinkSync)(a)}catch(c){return E.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",s,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(e)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(e){let r=this.metadataManager.resolveFolderForBranch(e.branch),n=t.slugify(e.commitMessage),o=e.commitHash.substring(0,8),i=`${r}/${n}-${o}.md`,s=(0,R.join)(this.rootPath,i);if((0,v.existsSync)(s))return!0;let a=await this.readFile(`summaries/${e.commitHash}.json`);if(!a)return E.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",e.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(C){return E.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",e.commitHash.substring(0,8),_(C)),!1}let c=this.buildYamlFrontmatter(l),u=vo(l),d=`${c}
${u}`;this.atomicWrite(s,d);let m=this.metadataManager.findById(e.commitHash),p=z.sha256(d);return this.metadataManager.updateManifest({path:i,fileId:l.commitHash,type:"commit",fingerprint:p,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:m?.title??l.commitMessage}),E.info("Regenerated visible MD: %s",i),!0}async healMissingVisibleMarkdown(e){let n=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,i=0,s=0,a=[];for(let c of n){let u=(0,R.join)(this.rootPath,c.path);if((0,v.existsSync)(u)){i++;continue}let d=(0,R.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),m;try{m=(0,v.readFileSync)(d,"utf-8")}catch($){let K=$.code;if(K==="ENOENT"){s++,e?.dropOrphanedManifestEntries?(a.push(c.fileId),E.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):E.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}s++,E.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),K??"?",_($));continue}let p;try{p=JSON.parse(m)}catch($){s++,E.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),_($));continue}let C=this.metadataManager.resolveFolderForBranch(p.branch),A=t.slugify(p.commitMessage),O=p.commitHash.substring(0,8),k=`${C}/${A}-${O}.md`;if(k!==c.path){i++,E.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,k);continue}let D={commitHash:p.commitHash,parentCommitHash:null,commitMessage:p.commitMessage,commitDate:p.commitDate,branch:p.branch,generatedAt:p.generatedAt};try{await this.regenerateVisibleMarkdown(D)?o++:(s++,E.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch($){s++,E.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),_($))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||s>0)&&E.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,i,s,l.length),l.length>0?{healed:o,skipped:i,failed:s,droppedIds:l}:{healed:o,skipped:i,failed:s}}dropManifestEntries(e){if(e.length===0)return[];let r=new Set(e),n=this.metadataManager.readManifest(),o=n.files.filter(s=>r.has(s.fileId)).map(s=>s.fileId);if(o.length===0)return[];let i=n.files.filter(s=>!r.has(s.fileId));return this.metadataManager.replaceFiles(i),o}isUserEditedOnDisk(e,r){if(!(0,v.existsSync)(e)||!r)return!1;let n;try{n=z.sha256((0,v.readFileSync)(e,"utf-8"))}catch(o){return E.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",e,String(o)),!0}return n!==r}generateSummaryMarkdown(e){let r;try{r=JSON.parse(e)}catch{return}let n=this.metadataManager.resolveFolderForBranch(r.branch),o=t.slugify(r.commitMessage),i=r.commitHash.substring(0,8),s=`${o}-${i}.md`,a=`${n}/${s}`,l=this.buildYamlFrontmatter(r),c=vo(r),u=`${l}
${c}`,d=(0,R.join)(this.rootPath,a),m=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,m?.fingerprint)){E.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,u);let p=z.sha256(u);this.metadataManager.updateManifest({path:a,fileId:r.commitHash,type:"commit",fingerprint:p,source:{commitHash:r.commitHash,branch:r.branch,generatedAt:r.generatedAt},title:r.commitMessage}),E.info("Markdown generated: %s",a),r.children&&r.children.length>0&&this.cleanupSupersededDescendants(r.children,a)}cleanupSupersededDescendants(e,r){let n=[];t.collectDescendantHashes(e,n);for(let o of n){let i=this.metadataManager.findById(o);if(!i||i.type!=="commit"||i.path===r)continue;let s=(0,R.join)(this.rootPath,i.path);if(!(0,v.existsSync)(s)){this.metadataManager.removeFromManifest(o);continue}if(!i.fingerprint){E.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",i.path);continue}if(this.isUserEditedOnDisk(s,i.fingerprint)){E.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i.path);continue}try{(0,v.unlinkSync)(s),this.metadataManager.removeFromManifest(o),E.info("Cleaned up superseded MD: %s",i.path)}catch(a){E.warn("Failed to delete superseded MD %s: %s",i.path,String(a))}}}static collectDescendantHashes(e,r){for(let n of e)r.push(n.commitHash),n.children&&n.children.length>0&&t.collectDescendantHashes(n.children,r)}buildYamlFrontmatter(e){let r=["---"];return r.push(`commitHash: ${e.commitHash}`),r.push(`branch: ${e.branch}`),r.push(`author: ${e.commitAuthor}`),r.push(`date: ${e.commitDate}`),r.push("type: commit"),e.commitType&&r.push(`commitType: ${e.commitType}`),e.stats&&(r.push(`filesChanged: ${e.stats.filesChanged}`),r.push(`insertions: ${e.stats.insertions}`),r.push(`deletions: ${e.stats.deletions}`)),r.push("---"),r.join(`
`)}async regenerateVisiblePlan(e,r){let n=await this.readFile(`plans/${e}.md`);if(!n)return E.warn("regenerateVisiblePlan: hidden plans/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),i=(0,R.join)(this.rootPath,o,`plan--${e}.md`);if((0,v.existsSync)(i))try{(0,v.unlinkSync)(i)}catch(s){return E.warn("regenerateVisiblePlan: cannot unlink %s [%s]",i,String(s)),!1}return this.generatePlanMarkdown(`plans/${e}.md`,n,r),!0}generatePlanMarkdown(e,r,n){let o=e.replace(/^plans\//,"").replace(/\.md$/,""),i=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),s=`plan--${o}.md`,a=`${i}/${s}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${r}`,u=(0,R.join)(this.rootPath,a),d=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,d?.fingerprint)){E.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,c);let m=z.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:m,updatedAt:new Date().toISOString(),source:n?{branch:n}:{},title:this.extractTitle(r)??o}),E.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(e,r){let n=await this.readFile(`notes/${e}.md`);if(!n)return E.warn("regenerateVisibleNote: hidden notes/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),i=(0,R.join)(this.rootPath,o,`note--${e}.md`);if((0,v.existsSync)(i))try{(0,v.unlinkSync)(i)}catch(s){return E.warn("regenerateVisibleNote: cannot unlink %s [%s]",i,String(s)),!1}return this.generateNoteMarkdown(`notes/${e}.md`,n,r),!0}generateNoteMarkdown(e,r,n){let o=e.replace(/^notes\//,"").replace(/\.md$/,""),i=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),s=`note--${o}.md`,a=`${i}/${s}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${r}`,u=(0,R.join)(this.rootPath,a),d=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,d?.fingerprint)){E.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,c);let m=z.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:m,source:n?{branch:n}:{},title:this.extractTitle(r)??o,updatedAt:new Date().toISOString()}),E.info("Note markdown generated: %s",a)}resolveBranchFromSlug(e){let r=e.split("-").at(-1);if(r.length>=7){let o=this.metadataManager.readManifest().files.find(s=>s.type==="commit"&&s.source?.commitHash?.startsWith(r));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let i=(0,R.join)(this.rootPath,".jolli","index.json");if((0,v.existsSync)(i))try{let a=JSON.parse((0,v.readFileSync)(i,"utf-8")).entries.find(l=>l.commitHash.startsWith(r));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(e){let r=e.match(/^#\s+(.+)/m);return r?r[1].trim():null}writeHiddenFile(e,r){let n=(0,R.join)(this.rootPath,".jolli",e);this.atomicWrite(n,r)}deleteHiddenFile(e){let r=(0,R.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return!1;try{return(0,v.unlinkSync)(r),!0}catch{return!1}}walkDir(e,r,n){for(let o of(0,v.readdirSync)(e,{withFileTypes:!0})){let i=(0,R.join)(e,o.name);o.isDirectory()?this.walkDir(i,r,n):n.push(Pr((0,R.relative)(r,i)))}}async renderTopicWiki(e){let r=(0,R.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(r);let n=this.buildWikiRenderContext();(0,v.mkdirSync)(r,{recursive:!0});let o=[];for(let i of e)try{let s=ll(i);o.push(s);let a=`_wiki/topic--${s.stableSlug}.md`,l=al(s,i.relatedBranches,i.lastUpdatedAt,n);this.atomicWrite((0,R.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${s.stableSlug}`,type:"wiki",fingerprint:z.sha256(l),source:{generatedAt:i.lastUpdatedAt},title:s.title})}catch(s){E.warn("renderTopicWiki: failed to render topic %s: %s",i.stableSlug,_(s))}try{let i=cl(o,n),s="_wiki/_index.md";this.atomicWrite((0,R.join)(this.rootPath,s),i),this.metadataManager.updateManifest({path:s,fileId:"wiki-index",type:"wiki",fingerprint:z.sha256(i),source:{generatedAt:new Date().toISOString()},title:`${n.repoName} Knowledge Wiki`})}catch(i){E.warn("renderTopicWiki: failed to render index: %s",_(i))}E.info("Topic-KB wiki regenerated: %d topics under %s",e.length,r)}isTopicWikiPresent(){return(0,v.existsSync)((0,R.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(e){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,v.existsSync)(e))try{for(let r of(0,v.readdirSync)(e))if(r.endsWith(".md"))try{(0,v.unlinkSync)((0,R.join)(e,r))}catch(n){E.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",r,_(n))}}catch(r){E.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",e,_(r))}}buildWikiRenderContext(){let e=this.metadataManager.readConfig(),r=this.metadataManager.listBranchMappings(),n=new Map(r.map(s=>[s.branch,s.folder])),o=this.metadataManager.readManifest(),i=new Map;for(let s of o.files)s.type==="commit"&&s.source.commitHash&&i.set(s.source.commitHash.substring(0,8),s);return{repoName:e.repoName??"Memory Bank",resolveCommitVisiblePath:s=>{let a=i.get(s);return a?`../${a.path}`:null},resolveBranchFolder:s=>n.get(s)??null,resolveCommitMessage:s=>i.get(s)?.title??null}}atomicWrite(e,r){po(this.vaultRoot,e,r)}static slugify(e){let r=e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return r.length>50&&(r=r.substring(0,50).replace(/-+$/,"")),r||"untitled"}}});function fl(){return(0,q.join)((0,yl.homedir)(),"Documents","jolli")}function bm(t){return t?km(t)?t:(Sm.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",t),fl()):fl()}function km(t){return t?(0,q.isAbsolute)(t)&&!t.includes(".."):!0}function wl(t,e,r){let n=bm(r),o=(0,q.join)(n,t);if(!(0,Ne.existsSync)(o)){let s=vl(n,t,e).match;return s||(Co(o,t,e),o)}let i=xl(o);return i&&El(i,e,t)?o:i&&Rl(o,i)?(Co(o,t,e),o):xm(n,t,e)}function Sl(t){let e=xo(t,["config","--get","remote.origin.url"]);if(e){let n=e.match(/\/([^/]+?)(?:\.git)?$/);if(n?.[1])return n[1]}let r=xo(t,["rev-parse","--git-common-dir"]);if(r){let n=(0,q.isAbsolute)(r)?r:(0,q.join)(t,r),o=(0,q.dirname)(n);if(o&&o!=="/"&&o!==".")return(0,q.basename)(o)}return(0,q.basename)(t)||"unknown"}function bl(){let t=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(t)&&t>0?t:3e4}function Em(){return Math.min(bl(),5e3)}function vm(t){return typeof t=="object"&&t!==null&&t.code==="ETIMEDOUT"}function ml(t,e,r=bl()){return Tt("git",e,{cwd:t,encoding:"utf-8",timeout:r,stdio:["ignore","pipe","pipe"]}).trim()||null}function xo(t,e){try{return ml(t,e)}catch(r){if(!vm(r))return null;try{return ml(t,e,Em())}catch{return null}}}function kl(t){return xo(t,["remote","get-url","origin"])}function El(t,e,r){return t.remoteUrl&&e?hl(t.remoteUrl)===hl(e):!t.remoteUrl&&!e?t.repoName==null||t.repoName===r:!1}function hl(t){return Rm(t).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function Rm(t){let e=t.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(e)return`https://${e[1]}${gl(e[2],"22")}/${e[3]}`;let r=t.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(r)return`https://${r[1]}${gl(r[2],"9418")}/${r[3]}`;let n=t.match(/^[^@/:]+@([^/:]+):(.+)$/);return n?`https://${n[1]}/${n[2]}`:t}function gl(t,e){return t===void 0||t===e?"":`:${t}`}function vl(t,e,r){let n=null,o=null,i=null;for(let s=2;s<=99;s++){let a=(0,q.join)(t,`${e}-${s}`);if(!(0,Ne.existsSync)(a)){i===null&&(i=a);continue}let l=xl(a);if(l&&El(l,r,e)){n=a;break}l&&o===null&&Rl(a,l)&&(o=a)}return{match:n,stub:o,firstUnused:i}}function xm(t,e,r){let n=vl(t,e,r);if(n.match)return n.match;let o=n.stub??n.firstUnused??(0,q.join)(t,`${e}-${Date.now()}`);return Co(o,e,r),o}function Co(t,e,r){let n=new z((0,q.join)(t,".jolli"));n.ensure();let o=n.readConfig();n.saveConfig({...o,remoteUrl:r??void 0,repoName:e})}function Rl(t,e){return e.remoteUrl==null&&e.repoName==null}function xl(t){let e=(0,q.join)(t,".jolli","config.json");if(!(0,Ne.existsSync)(e))return null;try{return JSON.parse((0,Ne.readFileSync)(e,"utf-8"))}catch{return null}}var Ne,yl,q,Sm,Cl=w(()=>{"use strict";Ne=require("node:fs"),yl=require("node:os"),q=require("node:path");y();We();Lr();Sm=f("KBPathResolver")});var et,Po=w(()=>{"use strict";y();ye();et=class{constructor(e){this.cwd=e}async readFile(e){return At(ee,e,this.cwd)}async batchReadFiles(e){return Xi(ee,e,this.cwd)}async writeFiles(e,r){await this.ensure(),await Yi(ee,e,r,this.cwd)}async listFiles(e){return[...await Qi(ee,e,this.cwd)]}async exists(){return fr(ee,this.cwd)}async ensure(){await In(ee,this.cwd)}}});async function Io(t,e){let r;try{r=await Se()}catch(i){Ut.warn("Failed to load config, falling back to defaults: %s",i.message),r={}}let n=r.storageMode??"dual-write",o=r.localFolder;switch(Ut.info("StorageFactory.create: storageMode=%s, projectPath=%s",n,t),n){case"dual-write":{let i=new et(e),s=Pl(t,o);return Ut.info("Storage mode: dual-write (primary=orphan, shadow=folder)"),new Mr(i,s)}case"folder":return Ut.info("Storage mode: folder"),Pl(t,o);default:return Ut.info("Storage mode: orphan (default)"),new et(e)}}function Pl(t,e){let r=Sl(t),n=kl(t),o=wl(r,n,e),i=new z((0,Il.join)(o,".jolli"));return new Jr(o,i)}var Il,Ut,Tl=w(()=>{"use strict";Il=require("node:path");y();Ha();pl();Cl();Lr();Po();ze();Ut=f("StorageFactory")});function Al(t){return t.summaryError===Cm}var Cm,To=w(()=>{"use strict";Cm="local-agent-auth"});function Ao(t){return Pm.exec(t)?.[1]??null}var Pm,Do=w(()=>{"use strict";Pm=/^transcripts\/(.+)\.json$/});function Im(t,e){return t||Dl||(process.env.VITEST||_o.warn("resolveStorage fallback to OrphanBranchStorage \u2014 caller did not thread storage or call setActiveStorage. Folder-mode users will miss this write. cwd=%s",e??"(undef)"),new et(e))}function _l(t){let e=[];for(let r of t)r.e2eTestGuide&&e.push(...r.e2eTestGuide),r.children&&e.push(..._l(r.children));return e}function Ol(t){let{e2eTestGuide:e,...r}=t;return r.children?{...r,children:r.children.map(Ol)}:r}function $l(t){let e=new Map;for(let r of t){if(r.plans)for(let n of r.plans){let o=n.slug,i=e.get(o);(!i||n.updatedAt>i.updatedAt)&&e.set(o,n)}if(r.children)for(let n of $l(r.children)){let o=e.get(n.slug);(!o||n.updatedAt>o.updatedAt)&&e.set(n.slug,n)}}return[...e.values()]}function Ml(t){let{plans:e,...r}=t;return r.children?{...r,children:r.children.map(Ml)}:r}function Ll(t){let e=new Map;for(let r of t){if(r.notes)for(let n of r.notes){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}if(r.children)for(let n of Ll(r.children)){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}}return[...e.values()]}function Nl(t){let{notes:e,...r}=t;return r.children?{...r,children:r.children.map(Nl)}:r}function jl(t){let{references:e,...r}=t;return r.children?{...r,children:r.children.map(jl)}:r}function Hl(t){let e=new Map;for(let r of t){let n=r.references??[];for(let o of n){let i=e.get(o.archivedKey);(!i||o.referencedAt>i.referencedAt)&&e.set(o.archivedKey,o)}if(r.children)for(let o of Hl(r.children)){let i=e.get(o.archivedKey);(!i||o.referencedAt>i.referencedAt)&&e.set(o.archivedKey,o)}}return[...e.values()]}function Fl(t){let{jolliDocId:e,jolliDocUrl:r,orphanedDocIds:n,unresolvedOrphanHashes:o,...i}=t;return i.children?{...i,children:i.children.map(Fl)}:i}function Jl(t){let e=[];for(let o of t){let i=o.jolliDocUrl;if(o.jolliDocId&&i&&e.push({jolliDocId:o.jolliDocId,jolliDocUrl:i,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let s=Jl(o.children);s.winner&&e.push({...s.winner})}}if(e.length===0)return{winner:null,orphanedDocIds:[]};e.sort((o,i)=>new Date(J(i)).getTime()-new Date(J(o)).getTime());let r=e[0],n=e.slice(1).map(o=>o.jolliDocId);return{winner:r,orphanedDocIds:n}}function ql(t){let e=[];for(let r of t??[])r.orphanedDocIds&&e.push(...r.orphanedDocIds),e.push(...ql(r.children));return e}function Bl(t){let e=[];for(let r of t??[])r.unresolvedOrphanHashes&&e.push(...r.unresolvedOrphanHashes),e.push(...Bl(r.children));return e}function Ul(t){if(t.version>=4)return t;let e=_l([t]),r=$l([t]),n=Ll([t]),o=Hl([t]),i=Jl([t]),s=Array.from(new Set([...i.orphanedDocIds,...t.orphanedDocIds??[],...ql(t.children)])),a=Array.from(new Set([...t.unresolvedOrphanHashes??[],...Bl(t.children)])),l=Am(t),c=Dm(t),u=t.diffStats===void 0&&t.stats!==void 0?qt(t):void 0,{stats:d,...m}=t;return{...m,version:4,topics:l,...c!==void 0?{recap:c}:{},...u!==void 0?{diffStats:u}:{},...e.length>0?{e2eTestGuide:e}:{},...r.length>0?{plans:r}:{},...n.length>0?{notes:n}:{},...o.length>0?{references:o}:{},...i.winner?{jolliDocId:i.winner.jolliDocId,jolliDocUrl:i.winner.jolliDocUrl}:{},...s.length>0?{orphanedDocIds:s}:{},...a.length>0?{unresolvedOrphanHashes:a}:{},...t.children!==void 0?{children:t.children.map(Om)}:{}}}function Wl(t){let{topics:e,...r}=t;return r.children?{...r,children:r.children.map(Wl)}:r}function Gl(t){let{recap:e,...r}=t;return r.children?{...r,children:r.children.map(Gl)}:r}function Am(t){return jr(t)?t.topics??[]:dt(t).map(({commitDate:e,generatedAt:r,treeIndex:n,...o})=>o)}function Dm(t){return jr(t)||t.recap?t.recap:_m(t.children)}function _m(t){if(!t||t.length===0)return;let e=[];if(Vl(t,e),e.length!==0)return e.sort((r,n)=>new Date(n.date).getTime()-new Date(r.date).getTime()),e[0]?.recap}function Vl(t,e){for(let r of t)r.recap&&e.push({recap:r.recap,date:J(r)}),r.children&&Vl(r.children,e)}function Om(t){return Fl(jl(Nl(Ml(Ol(Wl(Gl(t)))))))}async function Oo(t,e){return $m(t,e)}async function $m(t,e){let r=Im(e,t),n=await r.readFile(Tm);if(!n)return _o.warn("loadIndex: index.json unreadable from %s (fresh repo or backend read failed)",r.constructor.name),null;try{return JSON.parse(n)}catch(o){return _o.error("Failed to parse index.json: %s",o.message),null}}var Dl,_o,Tm,qr=w(()=>{"use strict";y();Hn();ye();Ge();Po();Bn();To();Fr();pt();Do();_o=f("SummaryStore"),Tm="index.json"});var Xl={};Ni(Xl,{__test__:()=>Hm,migrateSchemaToV5:()=>Lm,readSchemaV5State:()=>Br});async function Br(t,e){let n=await(e??await Io(t??process.cwd(),t)).readFile($o);if(!n)return null;try{return JSON.parse(n)}catch(o){return le.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function Mm(t,e,r){if(!await _n(t,{timeoutMs:Kl}))throw new Error(`${e}: could not acquire orphan-write lock within ${Kl}ms`);try{return await r()}finally{await On(t)}}async function Lm(t){let e=await Io(t??process.cwd(),t),r=await Br(t,e);return r?.status==="completed"?(le.info("Schema v5 migration already completed at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0}):await e.exists()?Mm(t,"migrateSchemaToV5",()=>jm(t,e)):(le.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function Nm(t,e){if(e.length===0)return new Map;if(t.batchReadFiles)return t.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await t.readFile(n));return r}async function jm(t,e){let r=await Br(t,e);if(r?.status==="completed")return le.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0};let n=new Date().toISOString(),o=await U(["rev-parse",`refs/heads/${ee}`],t).then(Z=>Z.stdout.trim()).catch(()=>null),i=await e.listFiles("summaries/");le.info("Found %d summary files to inspect",i.length);let s=await e.listFiles("transcripts/"),a=new Set;for(let Z of s){let H=Ao(Z);H&&a.add(H)}le.info("Reading %d summaries...",i.length);let l=Date.now(),c=await Nm(e,i);le.info("Read %d summaries in %d ms",c.size,Date.now()-l);let u=[],d=[],m=0,p=0;for(let Z of i){let H=c.get(Z);if(H===void 0)throw new Error(`readSummaries omitted ${Z} \u2014 protocol contract violation (expected one entry per request)`);if(H===null){p++;continue}let De;try{De=JSON.parse(H)}catch(ot){le.warn("Skipping unparseable summary %s: %s",Z,ot.message),p++;continue}let Be=zl(De,a),Ue=JSON.stringify(Be,null,"	");if(d.push({path:Z,content:Ue}),Be===De){p++;continue}u.push({path:Z,content:Ue}),m++}let C=i.length===0,A=m===0&&p>0,O=A?d:u,k=C?"Schema v5 migration: no pre-v5 data found":A?`Schema v5 migration: re-pushing ${p} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${p} skipped`,D=Date.now();if(O.length>0&&(le.info("Writing %d summary file(s) via active storage...",O.length),await e.writeFiles(O,k)),e.isDirty?.()??!1)return le.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,p,Date.now()-D),{migrated:m,skipped:p,fresh:C,alreadyDone:!1};let K={version:1,status:"completed",startedAt:n,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:p,fresh:C};return await e.writeFiles([{path:$o,content:JSON.stringify(K,null,"	")}],k),le.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,p,C,A,Date.now()-D),o&&le.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",o),{migrated:m,skipped:p,fresh:C,alreadyDone:!1}}function zl(t,e){if(t.version>=5&&t.transcripts!==void 0)return t;let r=Ul(t);if(r.transcripts!==void 0)return{...r,version:5};let o=So(r).filter(s=>e.has(s));return{...r,version:5,transcripts:o}}var le,$o,Kl,Hm,Mo=w(()=>{"use strict";y();ye();Ge();Tl();qr();pt();Do();le=f("SchemaV5Migration"),$o="schema-v5-migration.json",Kl=3e4;Hm={upgradeOneSummary:zl,SCHEMA_V5_STATE_FILE:$o}});var ft=S((Uv,Yl)=>{"use strict";var Jm="2.0.0",qm=Number.MAX_SAFE_INTEGER||9007199254740991,Bm=16,Um=250,Wm=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Yl.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Bm,MAX_SAFE_BUILD_LENGTH:Um,MAX_SAFE_INTEGER:qm,RELEASE_TYPES:Wm,SEMVER_SPEC_VERSION:Jm,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Gt=S((Wv,Ql)=>{"use strict";var Gm=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Ql.exports=Gm});var mt=S((be,Zl)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:Lo,MAX_SAFE_BUILD_LENGTH:Vm,MAX_LENGTH:Km}=ft(),zm=Gt();be=Zl.exports={};var Xm=be.re=[],Ym=be.safeRe=[],h=be.src=[],Qm=be.safeSrc=[],g=be.t={},Zm=0,No="[a-zA-Z0-9-]",eh=[["\\s",1],["\\d",Km],[No,Vm]],th=t=>{for(let[e,r]of eh)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},b=(t,e,r)=>{let n=th(e),o=Zm++;zm(t,o,e),g[t]=o,h[o]=e,Qm[o]=n,Xm[o]=new RegExp(e,r?"g":void 0),Ym[o]=new RegExp(n,r?"g":void 0)};b("NUMERICIDENTIFIER","0|[1-9]\\d*");b("NUMERICIDENTIFIERLOOSE","\\d+");b("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${No}*`);b("MAINVERSION",`(${h[g.NUMERICIDENTIFIER]})\\.(${h[g.NUMERICIDENTIFIER]})\\.(${h[g.NUMERICIDENTIFIER]})`);b("MAINVERSIONLOOSE",`(${h[g.NUMERICIDENTIFIERLOOSE]})\\.(${h[g.NUMERICIDENTIFIERLOOSE]})\\.(${h[g.NUMERICIDENTIFIERLOOSE]})`);b("PRERELEASEIDENTIFIER",`(?:${h[g.NONNUMERICIDENTIFIER]}|${h[g.NUMERICIDENTIFIER]})`);b("PRERELEASEIDENTIFIERLOOSE",`(?:${h[g.NONNUMERICIDENTIFIER]}|${h[g.NUMERICIDENTIFIERLOOSE]})`);b("PRERELEASE",`(?:-(${h[g.PRERELEASEIDENTIFIER]}(?:\\.${h[g.PRERELEASEIDENTIFIER]})*))`);b("PRERELEASELOOSE",`(?:-?(${h[g.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${h[g.PRERELEASEIDENTIFIERLOOSE]})*))`);b("BUILDIDENTIFIER",`${No}+`);b("BUILD",`(?:\\+(${h[g.BUILDIDENTIFIER]}(?:\\.${h[g.BUILDIDENTIFIER]})*))`);b("FULLPLAIN",`v?${h[g.MAINVERSION]}${h[g.PRERELEASE]}?${h[g.BUILD]}?`);b("FULL",`^${h[g.FULLPLAIN]}$`);b("LOOSEPLAIN",`[v=\\s]*${h[g.MAINVERSIONLOOSE]}${h[g.PRERELEASELOOSE]}?${h[g.BUILD]}?`);b("LOOSE",`^${h[g.LOOSEPLAIN]}$`);b("GTLT","((?:<|>)?=?)");b("XRANGEIDENTIFIERLOOSE",`${h[g.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);b("XRANGEIDENTIFIER",`${h[g.NUMERICIDENTIFIER]}|x|X|\\*`);b("XRANGEPLAIN",`[v=\\s]*(${h[g.XRANGEIDENTIFIER]})(?:\\.(${h[g.XRANGEIDENTIFIER]})(?:\\.(${h[g.XRANGEIDENTIFIER]})(?:${h[g.PRERELEASE]})?${h[g.BUILD]}?)?)?`);b("XRANGEPLAINLOOSE",`[v=\\s]*(${h[g.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[g.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[g.XRANGEIDENTIFIERLOOSE]})(?:${h[g.PRERELEASELOOSE]})?${h[g.BUILD]}?)?)?`);b("XRANGE",`^${h[g.GTLT]}\\s*${h[g.XRANGEPLAIN]}$`);b("XRANGELOOSE",`^${h[g.GTLT]}\\s*${h[g.XRANGEPLAINLOOSE]}$`);b("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Lo}})(?:\\.(\\d{1,${Lo}}))?(?:\\.(\\d{1,${Lo}}))?`);b("COERCE",`${h[g.COERCEPLAIN]}(?:$|[^\\d])`);b("COERCEFULL",h[g.COERCEPLAIN]+`(?:${h[g.PRERELEASE]})?(?:${h[g.BUILD]})?(?:$|[^\\d])`);b("COERCERTL",h[g.COERCE],!0);b("COERCERTLFULL",h[g.COERCEFULL],!0);b("LONETILDE","(?:~>?)");b("TILDETRIM",`(\\s*)${h[g.LONETILDE]}\\s+`,!0);be.tildeTrimReplace="$1~";b("TILDE",`^${h[g.LONETILDE]}${h[g.XRANGEPLAIN]}$`);b("TILDELOOSE",`^${h[g.LONETILDE]}${h[g.XRANGEPLAINLOOSE]}$`);b("LONECARET","(?:\\^)");b("CARETTRIM",`(\\s*)${h[g.LONECARET]}\\s+`,!0);be.caretTrimReplace="$1^";b("CARET",`^${h[g.LONECARET]}${h[g.XRANGEPLAIN]}$`);b("CARETLOOSE",`^${h[g.LONECARET]}${h[g.XRANGEPLAINLOOSE]}$`);b("COMPARATORLOOSE",`^${h[g.GTLT]}\\s*(${h[g.LOOSEPLAIN]})$|^$`);b("COMPARATOR",`^${h[g.GTLT]}\\s*(${h[g.FULLPLAIN]})$|^$`);b("COMPARATORTRIM",`(\\s*)${h[g.GTLT]}\\s*(${h[g.LOOSEPLAIN]}|${h[g.XRANGEPLAIN]})`,!0);be.comparatorTrimReplace="$1$2$3";b("HYPHENRANGE",`^\\s*(${h[g.XRANGEPLAIN]})\\s+-\\s+(${h[g.XRANGEPLAIN]})\\s*$`);b("HYPHENRANGELOOSE",`^\\s*(${h[g.XRANGEPLAINLOOSE]})\\s+-\\s+(${h[g.XRANGEPLAINLOOSE]})\\s*$`);b("STAR","(<|>)?=?\\s*\\*");b("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");b("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Ur=S((Gv,ec)=>{"use strict";var rh=Object.freeze({loose:!0}),nh=Object.freeze({}),oh=t=>t?typeof t!="object"?rh:t:nh;ec.exports=oh});var jo=S((Vv,nc)=>{"use strict";var tc=/^[0-9]+$/,rc=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return t===e?0:t<e?-1:1;let r=tc.test(t),n=tc.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},ih=(t,e)=>rc(e,t);nc.exports={compareIdentifiers:rc,rcompareIdentifiers:ih}});var N=S((Kv,ic)=>{"use strict";var Wr=Gt(),{MAX_LENGTH:oc,MAX_SAFE_INTEGER:Gr}=ft(),{safeRe:Vr,t:Kr}=mt(),sh=Ur(),{compareIdentifiers:Ho}=jo(),Fo=class t{constructor(e,r){if(r=sh(r),e instanceof t){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>oc)throw new TypeError(`version is longer than ${oc} characters`);Wr("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?Vr[Kr.LOOSE]:Vr[Kr.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Gr||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Gr||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Gr||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let i=+o;if(i>=0&&i<Gr)return i}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(Wr("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],o=e.prerelease[r];if(Wr("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return Ho(n,o)}while(++r)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let r=0;do{let n=this.build[r],o=e.build[r];if(Wr("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return Ho(n,o)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?Vr[Kr.PRERELEASELOOSE]:Vr[Kr.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let i=this.prerelease.length;for(;--i>=0;)typeof this.prerelease[i]=="number"&&(this.prerelease[i]++,i=-2);if(i===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let i=[r,o];n===!1&&(i=[r]),Ho(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};ic.exports=Fo});var je=S((zv,ac)=>{"use strict";var sc=N(),ah=(t,e,r=!1)=>{if(t instanceof sc)return t;try{return new sc(t,e)}catch(n){if(!r)return null;throw n}};ac.exports=ah});var cc=S((Xv,lc)=>{"use strict";var lh=je(),ch=(t,e)=>{let r=lh(t,e);return r?r.version:null};lc.exports=ch});var dc=S((Yv,uc)=>{"use strict";var uh=je(),dh=(t,e)=>{let r=uh(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};uc.exports=dh});var mc=S((Qv,fc)=>{"use strict";var pc=N(),ph=(t,e,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new pc(t instanceof pc?t.version:t,r).inc(e,n,o).version}catch{return null}};fc.exports=ph});var yc=S((Zv,gc)=>{"use strict";var hc=je(),fh=(t,e)=>{let r=hc(t,null,!0),n=hc(e,null,!0),o=r.compare(n);if(o===0)return null;let i=o>0,s=i?r:n,a=i?n:r,l=!!s.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(s)===0)return a.minor&&!a.patch?"minor":"patch"}let u=l?"pre":"";return r.major!==n.major?u+"major":r.minor!==n.minor?u+"minor":r.patch!==n.patch?u+"patch":"prerelease"};gc.exports=fh});var Sc=S((eR,wc)=>{"use strict";var mh=N(),hh=(t,e)=>new mh(t,e).major;wc.exports=hh});var kc=S((tR,bc)=>{"use strict";var gh=N(),yh=(t,e)=>new gh(t,e).minor;bc.exports=yh});var vc=S((rR,Ec)=>{"use strict";var wh=N(),Sh=(t,e)=>new wh(t,e).patch;Ec.exports=Sh});var xc=S((nR,Rc)=>{"use strict";var bh=je(),kh=(t,e)=>{let r=bh(t,e);return r&&r.prerelease.length?r.prerelease:null};Rc.exports=kh});var ce=S((oR,Pc)=>{"use strict";var Cc=N(),Eh=(t,e,r)=>new Cc(t,r).compare(new Cc(e,r));Pc.exports=Eh});var Tc=S((iR,Ic)=>{"use strict";var vh=ce(),Rh=(t,e,r)=>vh(e,t,r);Ic.exports=Rh});var Dc=S((sR,Ac)=>{"use strict";var xh=ce(),Ch=(t,e)=>xh(t,e,!0);Ac.exports=Ch});var zr=S((aR,Oc)=>{"use strict";var _c=N(),Ph=(t,e,r)=>{let n=new _c(t,r),o=new _c(e,r);return n.compare(o)||n.compareBuild(o)};Oc.exports=Ph});var Mc=S((lR,$c)=>{"use strict";var Ih=zr(),Th=(t,e)=>t.sort((r,n)=>Ih(r,n,e));$c.exports=Th});var Nc=S((cR,Lc)=>{"use strict";var Ah=zr(),Dh=(t,e)=>t.sort((r,n)=>Ah(n,r,e));Lc.exports=Dh});var Vt=S((uR,jc)=>{"use strict";var _h=ce(),Oh=(t,e,r)=>_h(t,e,r)>0;jc.exports=Oh});var Xr=S((dR,Hc)=>{"use strict";var $h=ce(),Mh=(t,e,r)=>$h(t,e,r)<0;Hc.exports=Mh});var Jo=S((pR,Fc)=>{"use strict";var Lh=ce(),Nh=(t,e,r)=>Lh(t,e,r)===0;Fc.exports=Nh});var qo=S((fR,Jc)=>{"use strict";var jh=ce(),Hh=(t,e,r)=>jh(t,e,r)!==0;Jc.exports=Hh});var Yr=S((mR,qc)=>{"use strict";var Fh=ce(),Jh=(t,e,r)=>Fh(t,e,r)>=0;qc.exports=Jh});var Qr=S((hR,Bc)=>{"use strict";var qh=ce(),Bh=(t,e,r)=>qh(t,e,r)<=0;Bc.exports=Bh});var Bo=S((gR,Uc)=>{"use strict";var Uh=Jo(),Wh=qo(),Gh=Vt(),Vh=Yr(),Kh=Xr(),zh=Qr(),Xh=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return Uh(t,r,n);case"!=":return Wh(t,r,n);case">":return Gh(t,r,n);case">=":return Vh(t,r,n);case"<":return Kh(t,r,n);case"<=":return zh(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};Uc.exports=Xh});var Gc=S((yR,Wc)=>{"use strict";var Yh=N(),Qh=je(),{safeRe:Zr,t:en}=mt(),Zh=(t,e)=>{if(t instanceof Yh)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?Zr[en.COERCEFULL]:Zr[en.COERCE]);else{let l=e.includePrerelease?Zr[en.COERCERTLFULL]:Zr[en.COERCERTL],c;for(;(c=l.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],o=r[3]||"0",i=r[4]||"0",s=e.includePrerelease&&r[5]?`-${r[5]}`:"",a=e.includePrerelease&&r[6]?`+${r[6]}`:"";return Qh(`${n}.${o}.${i}${s}${a}`,e)};Wc.exports=Zh});var Kc=S((wR,Vc)=>{"use strict";var eg=je(),tg=ft(),rg=N(),ng=(t,e,r)=>{if(!tg.RELEASE_TYPES.includes(e))return null;let n=og(t,r);return n&&ig(n,e)},og=(t,e)=>{let r=t instanceof rg?t.version:t;return eg(r,e)},ig=(t,e)=>{if(sg(e))return t.version;switch(t.prerelease=[],e){case"major":t.minor=0,t.patch=0;break;case"minor":t.patch=0;break}return t.format()},sg=t=>t.startsWith("pre");Vc.exports=ng});var Xc=S((SR,zc)=>{"use strict";var Uo=class{constructor(){this.max=1e3,this.map=new Map}get(e){let r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(e,r)}return this}};zc.exports=Uo});var ue=S((bR,eu)=>{"use strict";var ag=/\s+/g,Wo=class t{constructor(e,r){if(r=cg(r),e instanceof t)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new t(e.raw,r);if(e instanceof Go)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().replace(ag," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(o=>!Qc(o[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&wg(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let r=this.set[e];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(yg,"");let n=((this.options.includePrerelease&&hg)|(this.options.loose&&gg))+":"+e,o=Yc.get(n);if(o)return o;let i=this.options.loose,s=i?W[j.HYPHENRANGELOOSE]:W[j.HYPHENRANGE];e=e.replace(s,Ig(this.options.includePrerelease)),T("hyphen replace",e),e=e.replace(W[j.COMPARATORTRIM],pg),T("comparator trim",e),e=e.replace(W[j.TILDETRIM],fg),T("tilde trim",e),e=e.replace(W[j.CARETTRIM],mg),T("caret trim",e);let a=e.split(" ").map(d=>Sg(d,this.options)).join(" ").split(/\s+/).map(d=>Pg(d,this.options));i&&(a=a.filter(d=>(T("loose invalid filter",d,this.options),!!d.match(W[j.COMPARATORLOOSE])))),T("range list",a);let l=new Map,c=a.map(d=>new Go(d,this.options));for(let d of c){if(Qc(d))return[d];l.set(d.value,d)}l.size>1&&l.has("")&&l.delete("");let u=[...l.values()];return Yc.set(n,u),u}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(n=>Zc(n,r)&&e.set.some(o=>Zc(o,r)&&n.every(i=>o.every(s=>i.intersects(s,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new ug(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(Tg(this.set[r],e,this.options))return!0;return!1}};eu.exports=Wo;var lg=Xc(),Yc=new lg,cg=Ur(),Go=Kt(),T=Gt(),ug=N(),{safeRe:W,src:dg,t:j,comparatorTrimReplace:pg,tildeTrimReplace:fg,caretTrimReplace:mg}=mt(),{FLAG_INCLUDE_PRERELEASE:hg,FLAG_LOOSE:gg}=ft(),yg=new RegExp(dg[j.BUILD],"g"),Qc=t=>t.value==="<0.0.0-0",wg=t=>t.value==="",Zc=(t,e)=>{let r=!0,n=t.slice(),o=n.pop();for(;r&&n.length;)r=n.every(i=>o.intersects(i,e)),o=n.pop();return r},Sg=(t,e)=>(t=t.replace(W[j.BUILD],""),T("comp",t,e),t=Eg(t,e),T("caret",t),t=bg(t,e),T("tildes",t),t=Rg(t,e),T("xrange",t),t=Cg(t,e),T("stars",t),t),G=t=>!t||t.toLowerCase()==="x"||t==="*",bg=(t,e)=>t.trim().split(/\s+/).map(r=>kg(r,e)).join(" "),kg=(t,e)=>{let r=e.loose?W[j.TILDELOOSE]:W[j.TILDE];return t.replace(r,(n,o,i,s,a)=>{T("tilde",t,n,o,i,s,a);let l;return G(o)?l="":G(i)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:G(s)?l=`>=${o}.${i}.0 <${o}.${+i+1}.0-0`:a?(T("replaceTilde pr",a),l=`>=${o}.${i}.${s}-${a} <${o}.${+i+1}.0-0`):l=`>=${o}.${i}.${s} <${o}.${+i+1}.0-0`,T("tilde return",l),l})},Eg=(t,e)=>t.trim().split(/\s+/).map(r=>vg(r,e)).join(" "),vg=(t,e)=>{T("caret",t,e);let r=e.loose?W[j.CARETLOOSE]:W[j.CARET],n=e.includePrerelease?"-0":"";return t.replace(r,(o,i,s,a,l)=>{T("caret",t,o,i,s,a,l);let c;return G(i)?c="":G(s)?c=`>=${i}.0.0${n} <${+i+1}.0.0-0`:G(a)?i==="0"?c=`>=${i}.${s}.0${n} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.0${n} <${+i+1}.0.0-0`:l?(T("replaceCaret pr",l),i==="0"?s==="0"?c=`>=${i}.${s}.${a}-${l} <${i}.${s}.${+a+1}-0`:c=`>=${i}.${s}.${a}-${l} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.${a}-${l} <${+i+1}.0.0-0`):(T("no pr"),i==="0"?s==="0"?c=`>=${i}.${s}.${a}${n} <${i}.${s}.${+a+1}-0`:c=`>=${i}.${s}.${a}${n} <${i}.${+s+1}.0-0`:c=`>=${i}.${s}.${a} <${+i+1}.0.0-0`),T("caret return",c),c})},Rg=(t,e)=>(T("replaceXRanges",t,e),t.split(/\s+/).map(r=>xg(r,e)).join(" ")),xg=(t,e)=>{t=t.trim();let r=e.loose?W[j.XRANGELOOSE]:W[j.XRANGE];return t.replace(r,(n,o,i,s,a,l)=>{T("xRange",t,n,o,i,s,a,l);let c=G(i),u=c||G(s),d=u||G(a),m=d;return o==="="&&m&&(o=""),l=e.includePrerelease?"-0":"",c?o===">"||o==="<"?n="<0.0.0-0":n="*":o&&m?(u&&(s=0),a=0,o===">"?(o=">=",u?(i=+i+1,s=0,a=0):(s=+s+1,a=0)):o==="<="&&(o="<",u?i=+i+1:s=+s+1),o==="<"&&(l="-0"),n=`${o+i}.${s}.${a}${l}`):u?n=`>=${i}.0.0${l} <${+i+1}.0.0-0`:d&&(n=`>=${i}.${s}.0${l} <${i}.${+s+1}.0-0`),T("xRange return",n),n})},Cg=(t,e)=>(T("replaceStars",t,e),t.trim().replace(W[j.STAR],"")),Pg=(t,e)=>(T("replaceGTE0",t,e),t.trim().replace(W[e.includePrerelease?j.GTE0PRE:j.GTE0],"")),Ig=t=>(e,r,n,o,i,s,a,l,c,u,d,m)=>(G(n)?r="":G(o)?r=`>=${n}.0.0${t?"-0":""}`:G(i)?r=`>=${n}.${o}.0${t?"-0":""}`:s?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,G(c)?l="":G(u)?l=`<${+c+1}.0.0-0`:G(d)?l=`<${c}.${+u+1}.0-0`:m?l=`<=${c}.${u}.${d}-${m}`:t?l=`<${c}.${u}.${+d+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),Tg=(t,e,r)=>{for(let n=0;n<t.length;n++)if(!t[n].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let n=0;n<t.length;n++)if(T(t[n].semver),t[n].semver!==Go.ANY&&t[n].semver.prerelease.length>0){let o=t[n].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0}});var Kt=S((kR,su)=>{"use strict";var zt=Symbol("SemVer ANY"),zo=class t{static get ANY(){return zt}constructor(e,r){if(r=tu(r),e instanceof t){if(e.loose===!!r.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),Ko("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===zt?this.value="":this.value=this.operator+this.semver.version,Ko("comp",this)}parse(e){let r=this.options.loose?ru[nu.COMPARATORLOOSE]:ru[nu.COMPARATOR],n=e.match(r);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new ou(n[2],this.options.loose):this.semver=zt}toString(){return this.value}test(e){if(Ko("Comparator.test",e,this.options.loose),this.semver===zt||e===zt)return!0;if(typeof e=="string")try{e=new ou(e,this.options)}catch{return!1}return Vo(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new iu(e.value,r).test(this.value):e.operator===""?e.value===""?!0:new iu(this.value,r).test(e.semver):(r=tu(r),r.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||Vo(this.semver,"<",e.semver,r)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||Vo(this.semver,">",e.semver,r)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};su.exports=zo;var tu=Ur(),{safeRe:ru,t:nu}=mt(),Vo=Bo(),Ko=Gt(),ou=N(),iu=ue()});var Xt=S((ER,au)=>{"use strict";var Ag=ue(),Dg=(t,e,r)=>{try{e=new Ag(e,r)}catch{return!1}return e.test(t)};au.exports=Dg});var cu=S((vR,lu)=>{"use strict";var _g=ue(),Og=(t,e)=>new _g(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));lu.exports=Og});var du=S((RR,uu)=>{"use strict";var $g=N(),Mg=ue(),Lg=(t,e,r)=>{let n=null,o=null,i=null;try{i=new Mg(e,r)}catch{return null}return t.forEach(s=>{i.test(s)&&(!n||o.compare(s)===-1)&&(n=s,o=new $g(n,r))}),n};uu.exports=Lg});var fu=S((xR,pu)=>{"use strict";var Ng=N(),jg=ue(),Hg=(t,e,r)=>{let n=null,o=null,i=null;try{i=new jg(e,r)}catch{return null}return t.forEach(s=>{i.test(s)&&(!n||o.compare(s)===1)&&(n=s,o=new Ng(n,r))}),n};pu.exports=Hg});var gu=S((CR,hu)=>{"use strict";var Xo=N(),Fg=ue(),mu=Vt(),Jg=(t,e)=>{t=new Fg(t,e);let r=new Xo("0.0.0");if(t.test(r)||(r=new Xo("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){let o=t.set[n],i=null;o.forEach(s=>{let a=new Xo(s.semver.version);switch(s.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!i||mu(a,i))&&(i=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${s.operator}`)}}),i&&(!r||mu(r,i))&&(r=i)}return r&&t.test(r)?r:null};hu.exports=Jg});var wu=S((PR,yu)=>{"use strict";var qg=ue(),Bg=(t,e)=>{try{return new qg(t,e).range||"*"}catch{return null}};yu.exports=Bg});var tn=S((IR,Eu)=>{"use strict";var Ug=N(),ku=Kt(),{ANY:Wg}=ku,Gg=ue(),Vg=Xt(),Su=Vt(),bu=Xr(),Kg=Qr(),zg=Yr(),Xg=(t,e,r,n)=>{t=new Ug(t,n),e=new Gg(e,n);let o,i,s,a,l;switch(r){case">":o=Su,i=Kg,s=bu,a=">",l=">=";break;case"<":o=bu,i=zg,s=Su,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Vg(t,e,n))return!1;for(let c=0;c<e.set.length;++c){let u=e.set[c],d=null,m=null;if(u.forEach(p=>{p.semver===Wg&&(p=new ku(">=0.0.0")),d=d||p,m=m||p,o(p.semver,d.semver,n)?d=p:s(p.semver,m.semver,n)&&(m=p)}),d.operator===a||d.operator===l||(!m.operator||m.operator===a)&&i(t,m.semver))return!1;if(m.operator===l&&s(t,m.semver))return!1}return!0};Eu.exports=Xg});var Ru=S((TR,vu)=>{"use strict";var Yg=tn(),Qg=(t,e,r)=>Yg(t,e,">",r);vu.exports=Qg});var Cu=S((AR,xu)=>{"use strict";var Zg=tn(),ey=(t,e,r)=>Zg(t,e,"<",r);xu.exports=ey});var Tu=S((DR,Iu)=>{"use strict";var Pu=ue(),ty=(t,e,r)=>(t=new Pu(t,r),e=new Pu(e,r),t.intersects(e,r));Iu.exports=ty});var Du=S((_R,Au)=>{"use strict";var ry=Xt(),ny=ce();Au.exports=(t,e,r)=>{let n=[],o=null,i=null,s=t.sort((u,d)=>ny(u,d,r));for(let u of s)ry(u,e,r)?(i=u,o||(o=u)):(i&&n.push([o,i]),i=null,o=null);o&&n.push([o,null]);let a=[];for(let[u,d]of n)u===d?a.push(u):!d&&u===s[0]?a.push("*"):d?u===s[0]?a.push(`<=${d}`):a.push(`${u} - ${d}`):a.push(`>=${u}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var Nu=S((OR,Lu)=>{"use strict";var _u=ue(),Zo=Kt(),{ANY:Yo}=Zo,Qo=Xt(),ei=ce(),oy=(t,e,r={})=>{if(t===e)return!0;t=new _u(t,r),e=new _u(e,r);let n=!1;e:for(let o of t.set){for(let i of e.set){let s=sy(o,i,r);if(n=n||s!==null,s)continue e}if(n)return!1}return!0},iy=[new Zo(">=0.0.0-0")],Ou=[new Zo(">=0.0.0")],sy=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===Yo){if(e.length===1&&e[0].semver===Yo)return!0;r.includePrerelease?t=iy:t=Ou}if(e.length===1&&e[0].semver===Yo){if(r.includePrerelease)return!0;e=Ou}let n=new Set,o,i;for(let p of t)p.operator===">"||p.operator===">="?o=$u(o,p,r):p.operator==="<"||p.operator==="<="?i=Mu(i,p,r):n.add(p.semver);if(n.size>1)return null;let s;if(o&&i){if(s=ei(o.semver,i.semver,r),s>0)return null;if(s===0&&(o.operator!==">="||i.operator!=="<="))return null}for(let p of n){if(o&&!Qo(p,String(o),r)||i&&!Qo(p,String(i),r))return null;for(let C of e)if(!Qo(p,String(C),r))return!1;return!0}let a,l,c,u,d=i&&!r.includePrerelease&&i.semver.prerelease.length?i.semver:!1,m=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;d&&d.prerelease.length===1&&i.operator==="<"&&d.prerelease[0]===0&&(d=!1);for(let p of e){if(u=u||p.operator===">"||p.operator===">=",c=c||p.operator==="<"||p.operator==="<=",o){if(m&&p.semver.prerelease&&p.semver.prerelease.length&&p.semver.major===m.major&&p.semver.minor===m.minor&&p.semver.patch===m.patch&&(m=!1),p.operator===">"||p.operator===">="){if(a=$u(o,p,r),a===p&&a!==o)return!1}else if(o.operator===">="&&!p.test(o.semver))return!1}if(i){if(d&&p.semver.prerelease&&p.semver.prerelease.length&&p.semver.major===d.major&&p.semver.minor===d.minor&&p.semver.patch===d.patch&&(d=!1),p.operator==="<"||p.operator==="<="){if(l=Mu(i,p,r),l===p&&l!==i)return!1}else if(i.operator==="<="&&!p.test(i.semver))return!1}if(!p.operator&&(i||o)&&s!==0)return!1}return!(o&&c&&!i&&s!==0||i&&u&&!o&&s!==0||m||d)},$u=(t,e,r)=>{if(!t)return e;let n=ei(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},Mu=(t,e,r)=>{if(!t)return e;let n=ei(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};Lu.exports=oy});var Ju=S(($R,Fu)=>{"use strict";var ti=mt(),ju=ft(),ay=N(),Hu=jo(),ly=je(),cy=cc(),uy=dc(),dy=mc(),py=yc(),fy=Sc(),my=kc(),hy=vc(),gy=xc(),yy=ce(),wy=Tc(),Sy=Dc(),by=zr(),ky=Mc(),Ey=Nc(),vy=Vt(),Ry=Xr(),xy=Jo(),Cy=qo(),Py=Yr(),Iy=Qr(),Ty=Bo(),Ay=Gc(),Dy=Kc(),_y=Kt(),Oy=ue(),$y=Xt(),My=cu(),Ly=du(),Ny=fu(),jy=gu(),Hy=wu(),Fy=tn(),Jy=Ru(),qy=Cu(),By=Tu(),Uy=Du(),Wy=Nu();Fu.exports={parse:ly,valid:cy,clean:uy,inc:dy,diff:py,major:fy,minor:my,patch:hy,prerelease:gy,compare:yy,rcompare:wy,compareLoose:Sy,compareBuild:by,sort:ky,rsort:Ey,gt:vy,lt:Ry,eq:xy,neq:Cy,gte:Py,lte:Iy,cmp:Ty,coerce:Ay,truncate:Dy,Comparator:_y,Range:Oy,satisfies:$y,toComparators:My,maxSatisfying:Ly,minSatisfying:Ny,minVersion:jy,validRange:Hy,outside:Fy,gtr:Jy,ltr:qy,intersects:By,simplifyRange:Uy,subset:Wy,SemVer:ay,re:ti.re,src:ti.src,tokens:ti.t,SEMVER_SPEC_VERSION:ju.SEMVER_SPEC_VERSION,RELEASE_TYPES:ju.RELEASE_TYPES,compareIdentifiers:Hu.compareIdentifiers,rcompareIdentifiers:Hu.rcompareIdentifiers}});var Ww={};Ni(Ww,{buildPluginBootstrapOutput:()=>sr,main:()=>np,runPluginBootstrap:()=>rp});module.exports=dp(Ww);var Di=require("node:path"),tp=require("node:url");var pp="JOLLI_LOCAL_AGENT_CHILD";function cr(t=process.env){return t[pp]==="1"}ye();Ge();var se=require("node:fs/promises"),fe=require("node:path");y();ye();Ge();var us="profile.json",Up="jollimemory",Wp="backfill-card-dismissed",Gp="disabled-by-user";async function ds(t){let e=await U(["rev-parse","--git-common-dir"],t),r=e.exitCode===0?e.stdout.trim():"";if(!r)return{profilePath:(0,fe.join)(oe(t),us),legacyMarkerPath:null};let n=(0,fe.isAbsolute)(r)?r:(0,fe.join)(t,r),o=(0,fe.dirname)(n);return{profilePath:(0,fe.join)(oe(o),us),legacyMarkerPath:(0,fe.join)(n,Up,Wp)}}async function Nn(t){try{let e=await(0,se.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function Vp(t){try{return await(0,se.stat)(t),!0}catch{return!1}}async function ps(t,e){await(0,se.mkdir)((0,fe.dirname)(t),{recursive:!0});let r=`${t}.${process.pid}.tmp`;await(0,se.writeFile)(r,`${JSON.stringify(e,null,"	")}
`);try{await(0,se.rename)(r,t)}catch(n){throw await(0,se.unlink)(r).catch(()=>{}),n}}async function Kp(t,e){let{profilePath:r}=await ds(t);if(!(await Mn(t,async()=>{let o=await Nn(r);await ps(r,{...o,...e})})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function zp(t){let e;try{e=await lt(t)}catch{e=[t]}for(let r of e)if(await Vp((0,fe.join)(oe(r),Gp)))return!0;return!1}async function Ve(t){let{profilePath:e}=await ds(t),r=await Nn(e);if(r.manuallyDisabled!==void 0)return r.manuallyDisabled===!0;let n=await zp(t),o=await Mn(t,async()=>{let i=await Nn(e);return i.manuallyDisabled===void 0?(await ps(e,{...i,manuallyDisabled:n}),n):i.manuallyDisabled===!0}).catch(()=>null);return o?.acquired?o.value??n:n}async function jn(t,e){await Kp(t,{manuallyDisabled:e})}ze();var Ye=require("node:fs/promises"),ct=require("node:path");ve();var vf='"$HOME/.jolli/jollimemory/run-hook"';function he(t,e=""){let r=e?` ${e}`:"";return`${vf} ${t}${r}`}var Er=["run-hook","StopHook","jollimemory-hooks.jar"],Nt=["run-hook","SessionStartHook"],vr=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"];function jt(t,e){let r=typeof e=="string"?[e]:e;return t.some(n=>{let o=n.hooks;return Array.isArray(o)?o.some(i=>typeof i.command=="string"&&r.some(s=>i.command.includes(s))):!1})}function Xe(t,e){let r=typeof e=="string"?[e]:e,n=[];for(let o of t){let i=o.hooks;if(!Array.isArray(i)){n.push(o);continue}let s=i.filter(a=>!(typeof a.command=="string"&&r.some(l=>a.command.includes(l))));s.length>0&&n.push({...o,hooks:s})}return n}function Kn(t){return jt(t,Er)}function Rr(t){return Xe(t,Er)}async function zn(t){let e=(0,ct.join)(t,".claude"),r=(0,ct.join)(e,"settings.local.json"),n=he("stop"),o=he("session-start");await ea(t);let i={},s;try{s=await(0,Ye.readFile)(r,"utf-8"),i=JSON.parse(s)}catch(p){if(p.code!=="ENOENT")throw p}let a=i.hooks??{},l=a.Stop??[],c=a.SessionStart??[],u=Rr(l);u.push({hooks:[{type:"command",command:n,async:!0}]});let d=Xe(c,Nt);d.push({hooks:[{type:"command",command:o}]}),a.Stop=u,a.SessionStart=d,i.hooks=a;let m=JSON.stringify(i,null,"	");return s===m?{path:r}:(await(0,Ye.mkdir)(e,{recursive:!0}),await P(r,m),{path:r})}async function ea(t){let e=(0,ct.join)(t,".claude","settings.json"),r;try{let s=await(0,Ye.readFile)(e,"utf-8");r=JSON.parse(s)}catch{return}let n=r.hooks;if(!n)return;let o=n.Stop??[];if(!Kn(o))return;let i=Rr(o);i.length===0?delete n.Stop:n.Stop=i,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	"))}async function Xn(t){await ea(t);let e=(0,ct.join)(t,".claude","settings.local.json"),r;try{let l=await(0,Ye.readFile)(e,"utf-8");r=JSON.parse(l)}catch{return{}}let n=r.hooks;if(!n)return{};let o=n.Stop??[],i=Kn(o);if(i){let l=Rr(o);l.length===0?delete n.Stop:n.Stop=l}let s=n.SessionStart??[],a=jt(s,Nt);if(a){let l=Xe(s,Nt);l.length===0?delete n.SessionStart:n.SessionStart=l}return!i&&!a?{}:(Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	")),{})}async function ta(t){try{let e=await(0,Ye.readFile)((0,ct.join)(t,".claude","settings.local.json"),"utf-8"),n=JSON.parse(e).hooks;if(!n)return{stop:!1,sessionStart:!1};let o=n.Stop??[],i=n.SessionStart??[];return{stop:Zs(o,Er,he("stop"),!0),sessionStart:Zs(i,Nt,he("session-start"),!1)}}catch{return{stop:!1,sessionStart:!1}}}function Zs(t,e,r,n){let o=t.filter(a=>a.hooks?.some(c=>{let u=c.command;return typeof u=="string"&&e.some(d=>u.includes(d))}));if(o.length!==1)return!1;let i=o[0].hooks;if(!i||i.length!==1)return!1;let s=i[0];return s.type==="command"&&s.command===r&&(n?s.async===!0:s.async===void 0)}var Qe=require("node:fs/promises"),xe=require("node:path");ve();y();We();var ae=f("GitExclude"),Ht="# >>> jolli skill exclude >>>",Ft="# <<< jolli skill exclude <<<";function Rf(t,e){return xe.win32.isAbsolute(t)||xe.posix.isAbsolute(t)?t:(0,xe.join)(e,t)}async function Yn(t){try{let{stdout:e}=await at("git",["rev-parse","--git-path","info/exclude"],{cwd:t}),r=e.trim();return r.length===0?null:Rf(r,t)}catch{return null}}async function ra(t,e){let r=await Yn(t);if(!r)return ae.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,Qe.readFile)(r,"utf-8")}catch(s){if(s.code!=="ENOENT")return ae.warn("Failed to read %s: %s \u2014 skipping update",r,s.message),!1}let o=oa(e),i=ia(n,o);if(i===n)return!0;try{return await(0,Qe.mkdir)((0,xe.dirname)(r),{recursive:!0}),await P(r,i),ae.info("Updated %s with %d Jolli skill exclude paths",r,e.length),!0}catch(s){return ae.warn("Failed to write %s: %s",r,s.message),!1}}async function xr(t,e){let r=await Yn(t);if(!r)return ae.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,Qe.readFile)(r,"utf-8")}catch(i){if(i.code!=="ENOENT")return ae.warn("Failed to read %s: %s \u2014 skipping update",r,i.message),!1}let o=xf(n,e);if(o===n)return!0;try{return await(0,Qe.mkdir)((0,xe.dirname)(r),{recursive:!0}),await P(r,o),ae.info("Merged %d Jolli skill exclude path(s) into %s",e.length,r),!0}catch(i){return ae.warn("Failed to write %s: %s",r,i.message),!1}}async function na(t,e){let r=await Yn(t);if(!r)return ae.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",t),!1;let n;try{n=await(0,Qe.readFile)(r,"utf-8")}catch(i){return i.code==="ENOENT"?!0:(ae.warn("Failed to read %s: %s \u2014 skipping cleanup",r,i.message),!1)}let o=Cf(n,e);if(o===n)return!0;try{return await P(r,o),ae.info("Removed %d Jolli exclude path(s) from %s",e.length,r),!0}catch(i){return ae.warn("Failed to write %s: %s",r,i.message),!1}}function oa(t){return`${[Ht,...t,Ft].join(`
`)}
`}function ia(t,e){let r=t.split(`
`),n=r.indexOf(Ht),o=r.indexOf(Ft),i=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...i,...r.slice(o+1)].join(`
`);if(t.length===0)return e;let s=t.endsWith(`
`)?"":`
`;return`${t}${s}${e}`}function xf(t,e){let r=t.split(`
`),n=r.indexOf(Ht),o=r.indexOf(Ft),i=n!==-1&&o!==-1&&o>n?r.slice(n+1,o):[],s=new Set(i),a=[...i];for(let l of e)s.has(l)||(s.add(l),a.push(l));return ia(t,oa(a))}function Cf(t,e){let r=t.split(`
`),n=r.indexOf(Ht),o=r.indexOf(Ft);if(n===-1||o===-1||o<=n)return t;let i=new Set(e),s=r.slice(n+1,o).filter(c=>!i.has(c)),a=r.slice(0,n),l=r.slice(o+1);return s.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,Ht,...s,Ft,...l].join(`
`)}var En=require("node:fs/promises"),nt=require("node:path"),Jd=require("node:url");y();var Ce={major:22,minor:5};function Pe(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Ce.major?!0:r<Ce.major?!1:n>=Ce.minor}var Pb=f("AntigravityDetector");y();y();y();var Pf=f("TranscriptParser"),Cr=class{parseLine(e,r){return aa(e,r)}parseUsageTokens(e,r){let n=sa(e);return n?{input:n.input,output:n.output,cached:n.cached}:{input:0,output:0,cached:0}}parseUsageByModel(e){let r=new Map;for(let n of e){let o=sa(n);if(!o)continue;let i=r.get(o.model);i?r.set(o.model,{...i,input:i.input+o.input,output:i.output+o.output,cached:i.cached+o.cached}):r.set(o.model,{model:o.model,provider:"anthropic",input:o.input,output:o.output,cached:o.cached})}return[...r.values()]}parseTimestamp(e,r){try{let n=JSON.parse(e);return typeof n.timestamp=="string"?n.timestamp:void 0}catch{return}}},Qn=class{parseLine(e,r){try{let n=JSON.parse(e),o=typeof n.timestamp=="string"?n.timestamp:void 0;if(n.type!=="event_msg")return null;let s=n.payload;if(!s||typeof s!="object")return null;let a=s.type;return a==="user_message"?If(s,o):a==="agent_message"?Tf(s,o):null}catch(n){return Pf.debug("Failed to parse Codex transcript line %d: %s",r,n.message),null}}};function If(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"human",content:r.trim(),timestamp:e}}function Tf(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"assistant",content:r.trim(),timestamp:e}}function sa(t){try{let e=JSON.parse(t),r=e.message?.usage??e.usage;if(!r||typeof r!="object")return null;let n=s=>typeof r[s]=="number"?r[s]:0,o=e.message?.model??e.model;return{model:typeof o=="string"?o:"",input:n("input_tokens"),output:n("output_tokens"),cached:n("cache_creation_input_tokens")}}catch{return null}}var Db=new Cr,_b=new Qn;var Zn=f("TranscriptReader");var Af=["Base directory for this skill:","[Request interrupted by user"],Df=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function aa(t,e){try{let r=JSON.parse(t);if(r.isCompactSummary===!0)return Zn.debug("Skipping compaction summary at line %d",e),null;if(!r.message||typeof r.message!="object")return null;let n=r.message,o=n.role,i=typeof r.timestamp=="string"?r.timestamp:void 0;if(o==="user")return _f(n,i,e);if(o==="assistant"){let s=la(n.content)?.trim();return s?{role:"assistant",content:s,timestamp:i}:null}return null}catch(r){return Zn.debug("Failed to parse transcript line %d: %s",e,r.message),null}}function _f(t,e,r){let n=la(t.content);if(!n)return null;let o=Of(n);return o.length===0?null:Af.some(i=>o.startsWith(i))?(Zn.debug("Skipping filtered user message at line %d",r),null):{role:"human",content:o,timestamp:e}}function Of(t){return t.replace(Df,"").trim()}function la(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t)if(r!==null&&typeof r=="object"){let n=r;n.type==="text"&&typeof n.text=="string"&&e.push(n.text)}return e.length>0?e.join(`
`):null}return null}ye();Ze();var Qb=f("AntigravityDiscoverer"),Zb=2880*60*1e3;var ca=require("node:fs/promises"),Dr=require("node:os"),to=require("node:path");function Mf(t=(0,Dr.homedir)()){return(0,to.join)(t,".cline","data")}function ua(t=(0,Dr.homedir)()){return(0,to.join)(Mf(t),"sessions")}async function da(t=(0,Dr.homedir)()){try{return await(0,ca.access)(ua(t)),!0}catch{return!1}}y();Ze();var sk=f("ClineCliDiscoverer"),ak=2880*60*1e3;var fa=require("node:fs/promises"),ro=require("node:os"),no=require("node:path");var _r=require("node:os"),Jt=require("node:path");y();var uk=f("VscodeWorkspaceLocator"),pa=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function Ie(t,e=(0,_r.homedir)()){switch((0,_r.platform)()){case"darwin":return(0,Jt.join)(e,"Library","Application Support",t);case"win32":return(0,Jt.join)(process.env.APPDATA??(0,Jt.join)(e,"AppData","Roaming"),t);default:return(0,Jt.join)(e,".config",t)}}var Lf="saoudrizwan.claude-dev";function Nf(t,e){return(0,no.join)(Ie(t,e),"User","globalStorage",Lf)}function ma(t=(0,ro.homedir)()){return pa.map(e=>Nf(e,t))}async function ha(t=(0,ro.homedir)()){for(let e of ma(t))try{return await(0,fa.access)((0,no.join)(e,"state","taskHistory.json")),!0}catch{}return!1}y();Ze();var yk=f("ClineDiscoverer"),wk=2880*60*1e3;var oo=require("node:fs/promises"),ga=require("node:os"),io=require("node:path");y();var Ek=f("CodexDiscoverer"),vk=2880*60*1e3,jf=".codex";async function so(){let t=(0,io.join)((0,ga.homedir)(),jf);try{return(await(0,oo.stat)(t)).isDirectory()}catch{return!1}}var wa=require("node:fs/promises"),Sa=require("node:os"),ao=require("node:path");y();var Hf=f("CopilotChatDetector");function Ff(t){return(0,ao.join)(Ie("Code",t),"User","globalStorage","github.copilot-chat")}function Jf(t=(0,Sa.homedir)()){return(0,ao.join)(t,".copilot","session-state")}async function ya(t){try{return(await(0,wa.stat)(t)).isDirectory()}catch(e){let r=e.code;return r!=="ENOENT"&&Hf.warn("Copilot Chat probe stat failed for %s (%s): %s",t,r??"unknown",e.message),!1}}async function ba(){let[t,e]=await Promise.all([ya(Ff()),ya(Jf())]);return t||e}y();var Dk=f("CopilotChatDiscoverer"),_k=2880*60*1e3;var va=require("node:fs/promises"),Ra=require("node:os"),xa=require("node:path");y();var Ea=f("CopilotDetector");function Ca(){return(0,xa.join)((0,Ra.homedir)(),".copilot","session-store.db")}async function Pa(){if(!Pe())return Ea.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Ce.major,Ce.minor),!1;let t=Ca();try{return(await(0,va.stat)(t)).isFile()}catch(e){let r=e.code;return r!=="ENOENT"&&Ea.warn("Copilot DB stat failed (%s): %s",r??"unknown",e.message),!1}}y();var Jk=f("CopilotDiscoverer"),qk=2880*60*1e3;var Or=require("node:fs/promises"),$r=require("node:os"),lo=require("node:path");y();Ze();var Gk=f("CursorCliDiscoverer"),Vk=2880*60*1e3;function Bf(t=(0,$r.homedir)()){return(0,lo.join)(t,".cursor")}function Uf(t=(0,$r.homedir)()){return(0,lo.join)(Bf(t),"chats")}async function Ia(t=(0,$r.homedir)()){try{return(await(0,Or.stat)(Uf(t))).isDirectory()}catch{return!1}}var Ta=require("node:fs/promises"),Aa=require("node:path");y();var Wf=f("CursorDetector");function Da(t){return(0,Aa.join)(Ie("Cursor",t),"User","globalStorage","state.vscdb")}async function _a(){if(!Pe())return Wf.info("Cursor support disabled: this runtime is Node %s, requires 22.5+ for built-in SQLite",process.versions.node),!1;let t=Da();try{return(await(0,Ta.stat)(t)).isFile()}catch{return!1}}y();var nE=f("CursorDiscoverer"),oE=2880*60*1e3;y();var cE=f("DevinDiscoverer"),uE=2880*60*1e3;var Oa=require("node:fs/promises"),$a=require("node:os"),Ma=require("node:path");y();var Gf=f("GeminiDetector"),Vf=".gemini";async function co(){let t=(0,Ma.join)((0,$a.homedir)(),Vf);try{return(await(0,Oa.stat)(t)).isDirectory()}catch{return Gf.debug("Gemini CLI directory not found: %s",t),!1}}ye();Ge();var La=require("node:fs/promises"),Na=require("node:os"),uo=require("node:path");y();var Kf=f("OpenCodeDiscoverer"),yE=2880*60*1e3;function zf(){return process.env.XDG_DATA_HOME||(0,uo.join)((0,Na.homedir)(),".local","share")}function Xf(){return(0,uo.join)(zf(),"opencode","opencode.db")}async function ja(){if(!Pe())return Kf.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Ce.major,Ce.minor),!1;let t=Xf();try{return(await(0,La.stat)(t)).isFile()}catch{return!1}}Mo();ze();qr();y();var rt=require("node:fs/promises"),Yu=require("node:os"),Qt=require("node:path");ve();y();var Gu=require("node:crypto"),yt=require("node:fs"),ni=require("node:fs/promises"),on=require("node:os"),Te=require("node:path");y();var Bu=require("node:fs"),nn=require("node:fs/promises"),Uu=require("node:os"),tt=require("node:path"),Wu=require("node:url");ve();y();var Fm=/^[a-z0-9][a-z0-9-]*$/;function Wt(t){return Fm.test(t)}var ht=Pn(Ju(),1);function gt(t,e){if(t.includes("-")||t.includes("+")||e.includes("-")||e.includes("+")){let s=c=>{let u=(0,ht.valid)(c);return u||(/^\d+(\.\d+)*$/.test(c)?(0,ht.coerce)(c)?.version??null:null)},a=s(t),l=s(e);if(a&&l)return(0,ht.compare)(a,l);if(a)return 1;if(l)return-1}let r=/^\d+(\.\d+)*$/.test(t),n=/^\d+(\.\d+)*$/.test(e);if(!r&&!n)return 0;if(!r)return-1;if(!n)return 1;let o=t.split(".").map(Number),i=e.split(".").map(Number);for(let s=0;s<Math.max(o.length,i.length);s++){let a=(o[s]??0)-(i[s]??0);if(a!==0)return a}return 0}var rn=f("DistPathWriter");async function Yt(t,e,r,n){if(!Wt(t))return rn.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(t)),!1;let o=e??(0,tt.dirname)((0,Wu.fileURLToPath)(__jmImportMetaUrl)),i=r??"0.99.9",s=(0,tt.join)(n??(0,tt.join)((0,Uu.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,tt.join)(s,t);try{await(0,nn.mkdir)(s,{recursive:!0});let l=`${i}
${o}`,c;try{c=await(0,nn.readFile)(a,"utf-8")}catch{}if(c){let[u,d]=c.split(`
`);if(!!(u&&d&&qu(d))&&(gt(u,i)>=0||!qu(o)))return rn.info("Kept dist-paths/%s at complete version=%s (candidate=%s)",t,u,i),!0}return c!==l&&await P(a,l),rn.info("Wrote dist-paths/%s (version=%s, distDir=%s)",t,i,o),!0}catch(l){return rn.warn("Failed to write dist-paths/%s: %s",t,l.message),!1}}var Gy=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function qu(t){return Gy.every(e=>(0,Bu.existsSync)((0,tt.join)(t,e)))}var ri=f("DistPathResolver"),Vy=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function oi(t){let e=t.replace(/\\/g,"/");for(let[n,o]of Vy)if(e.includes(n))return o;let r=e.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return r?.[1]?r[1].toLowerCase():(0,Gu.createHash)("sha256").update(t).digest("hex").slice(0,8)}function Vu(t){try{let r=(0,yt.readFileSync)(t,"utf-8").trim().split(`
`).map(i=>i.trim());if(r.length<2)return null;let n=r[0],o=r[r.length-1];if(!o)return null;if(n.startsWith("source=")){let i=n.slice(7),s=i.indexOf("@");return s===-1?{source:i,version:"unknown",distDir:o}:{source:i.slice(0,s),version:i.slice(s+1),distDir:o}}return{source:"",version:n,distDir:o}}catch{return null}}function sn(t){let e=(0,Te.join)(t??(0,Te.join)((0,on.homedir)(),".jolli","jollimemory"),"dist-paths"),r;try{r=(0,yt.readdirSync)(e)}catch{return[]}let n=[];for(let o of r){let i=(0,Te.join)(e,o),s=Vu(i);s&&n.push({source:o,version:s.version,distDir:s.distDir,available:(0,yt.existsSync)(s.distDir)})}return n}async function Ku(t){let e=(0,Te.join)(t??(0,Te.join)((0,on.homedir)(),".jolli","jollimemory"),"dist-paths"),r=[];for(let n of sn(t))if(!n.available)try{await(0,ni.unlink)((0,Te.join)(e,n.source)),r.push(n.source),ri.info("Pruned stale dist-paths/%s (dir gone: %s)",n.source,n.distDir)}catch(o){ri.warn("Failed to prune stale dist-paths/%s: %s",n.source,o.message)}return r}var ii=["cli","vscode","cursor"];function si(t){let e=t.filter(o=>o.available);if(e.length===0)return;let r=e[0];for(let o=1;o<e.length;o++)gt(e[o].version,r.version)>0&&(r=e[o]);let n=e.filter(o=>gt(o.version,r.version)===0);for(let o of ii){let i=n.find(s=>s.source===o);if(i)return i}return r}async function zu(){let t=(0,Te.join)((0,on.homedir)(),".jolli","jollimemory"),e=(0,Te.join)(t,"dist-path"),r=Vu(e);if(!r)return!1;let n;if(r.source==="cli")n="cli";else{let o=oi(r.distDir);n=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return n==="vscode-extension"&&(n="vscode"),await Yt(n,r.distDir,r.version),await(0,ni.unlink)(e).catch(()=>{}),ri.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",n,r.version,r.distDir),!0}var Xu=f("DispatchScripts"),Ky=`#!/bin/bash
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
  for pref in ${ii.join(" ")}; do
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
`,zy=`#!/bin/bash
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

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" "$SCRIPT") || exit 0
if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: node runtime not found. Jolli Memory hooks require Node.js." >&2
  exit 0
fi

exec node "$DIST/$SCRIPT" "$@"
`,Xy=`#!/bin/bash
# JolliMemory CLI runner.
# Execs node on the winning dist's Cli.js with all args passed through.
# Requires the winning dist to actually contain Cli.js (every real dist does),
# so a partial source can't win run-cli either.

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" Cli.js) || exit 1
if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: node runtime not found. Jolli Memory CLI requires Node.js." >&2
  exit 1
fi

exec node "$DIST/Cli.js" "$@"
`;async function ai(t,e){let r=!1;try{r=await(0,rt.readFile)(t,"utf-8")===e}catch{}if(r){await(0,rt.chmod)(t,493);return}await P(t,e),await(0,rt.chmod)(t,493)}async function li(){let t=(0,Qt.join)((0,Yu.homedir)(),".jolli","jollimemory");try{return await(0,rt.mkdir)(t,{recursive:!0}),await ai((0,Qt.join)(t,"resolve-dist-path"),Ky),await ai((0,Qt.join)(t,"run-hook"),zy),await ai((0,Qt.join)(t,"run-cli"),Xy),Xu.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",t),!0}catch(e){return Xu.warn("Failed to write resolve scripts: %s",e.message),!1}}var Zt=require("node:fs/promises"),an=require("node:path");ve();y();var Qu=f("GeminiHookInstaller");async function ci(t){let e=(0,an.join)(t,".gemini"),r=(0,an.join)(e,"settings.json"),n=he("gemini-after-agent"),o={},i;try{i=await(0,Zt.readFile)(r,"utf-8"),o=JSON.parse(i)}catch(u){if(u.code!=="ENOENT")throw u}let s=o.hooks??{},a=s.AfterAgent??[],l=Xe(a,vr);l.push({hooks:[{type:"command",command:n,name:"jolli-session-tracker"}]}),s.AfterAgent=l,o.hooks=s;let c=JSON.stringify(o,null,"	");return i===c?{path:r}:(await(0,Zt.mkdir)(e,{recursive:!0}),await P(r,c),Qu.info("Gemini AfterAgent hook installed"),{path:r})}async function ui(t){let e=(0,an.join)(t,".gemini","settings.json"),r;try{let s=await(0,Zt.readFile)(e,"utf-8");r=JSON.parse(s)}catch{return}let n=r.hooks;if(!n)return;let o=n.AfterAgent??[];if(!jt(o,vr))return;let i=Xe(o,vr);i.length===0?delete n.AfterAgent:n.AfterAgent=i,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	")),Qu.info("Gemini AfterAgent hook removed")}var B=require("node:fs/promises"),tr=require("node:path");ve();ye();y();var ln=f("GitHookInstaller"),er="# >>> JolliMemory post-commit hook >>>",di="# <<< JolliMemory post-commit hook <<<",cn="# >>> JolliMemory post-rewrite hook >>>",Zu="# <<< JolliMemory post-rewrite hook <<<",un="# >>> JolliMemory prepare-commit-msg hook >>>",ed="# <<< JolliMemory prepare-commit-msg hook <<<",dn="# >>> JolliMemory post-merge hook >>>",td="# <<< JolliMemory post-merge hook <<<",pn="# >>> JolliMemory pre-push hook >>>",rd="# <<< JolliMemory pre-push hook <<<";async function nd(t){let e=await Dt(t),r=(0,tr.join)(e,"post-commit"),n=he("post-commit"),o=[er,n,di].join(`
`),i,s="";try{if(s=await(0,B.readFile)(r,"utf-8"),s.includes(er)){let l=new RegExp(`\\n*${He(er)}[\\s\\S]*?${He(di)}\\n*`,"g"),u=`${s.replace(l,`
`).trimEnd()}

${o}
`;return s===u?(await hn(r),{path:r}):(await P(r,u),await(0,B.chmod)(r,493),{path:r})}i="Existing post-commit hook found \u2014 Jolli Memory section appended",ln.warn(i)}catch{}let a;s?a=`${s}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,B.mkdir)(e,{recursive:!0}),await P(r,a);try{await(0,B.chmod)(r,493)}catch{}return ln.info("Git post-commit hook installed"),{warning:i,path:r}}async function od(t){let e=he("post-rewrite",'"$1"'),r=[cn,e,Zu].join(`
`);return fn(t,"post-rewrite",r,cn)}async function id(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${e} ]; then ${e} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),n=[un,r,ed].join(`
`);return fn(t,"prepare-commit-msg",n,un)}async function sd(t){let e=he("post-merge"),r=[dn,e,td].join(`
`);return fn(t,"post-merge",r,dn)}async function ad(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_pre_push_previous_status=$?",`if [ -x ${e} ]; then ${e} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),n=[pn,r,rd].join(`
`);return fn(t,"pre-push",n,pn)}async function fn(t,e,r,n){let o=r.slice(r.lastIndexOf(`
`)+1),i=await Dt(t),s=(0,tr.join)(i,e),a,l="";try{if(l=await(0,B.readFile)(s,"utf-8"),l.includes(n)){let u=new RegExp(`\\n*${He(n)}[\\s\\S]*?${He(o)}\\n*`,"g"),m=`${l.replace(u,`
`).trimEnd()}

${r}
`;return l===m?(await hn(s),{path:s}):(await P(s,m),await(0,B.chmod)(s,493),{path:s})}a=`Existing ${e} hook found \u2014 Jolli Memory section appended`,ln.warn(a)}catch{}let c;l?c=`${l}

${r}
`:c=`#!/bin/sh

${r}
`,await(0,B.mkdir)(i,{recursive:!0}),await P(s,c);try{await(0,B.chmod)(s,493)}catch{}return ln.info("Git %s hook installed",e),{warning:a,path:s}}async function ld(t){let e;try{let i=await Dt(t);e=(0,tr.join)(i,"post-commit")}catch{return{}}let r;try{r=await(0,B.readFile)(e,"utf-8")}catch{return{}}if(!r.includes(er))return{};let n=new RegExp(`\\n*${He(er)}[\\s\\S]*?${He(di)}\\n*`,"g"),o=r.replace(n,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:i}=await import("node:fs/promises");await i(e,{force:!0})}else await P(e,o),await hn(e);return{}}async function cd(t){await mn(t,"post-rewrite",cn,Zu)}async function ud(t){await mn(t,"prepare-commit-msg",un,ed)}async function dd(t){await mn(t,"post-merge",dn,td)}async function pd(t){await mn(t,"pre-push",pn,rd)}async function mn(t,e,r,n){let o;try{o=await Dt(t)}catch{return}let i=(0,tr.join)(o,e),s;try{s=await(0,B.readFile)(i,"utf-8")}catch{return}if(!s.includes(r))return;let a=new RegExp(`\\n*${He(r)}[\\s\\S]*?${He(n)}\\n*`,"g"),l=s.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(i,{force:!0})}else await P(i,l),await hn(i)}function He(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function hn(t){try{((await(0,B.stat)(t)).mode&73)===0&&await(0,B.chmod)(t,493)}catch{}}var Fe=require("node:fs/promises"),pi=require("node:os"),rr=require("node:path");y();var wt=f("GlobalInstructionsInstaller"),fi="<!-- >>> jolli memory instructions >>> -->",mi="<!-- <<< jolli memory instructions <<< -->",fd="## Jolli Memory",md=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function Yy(){return`${[fi,fd,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",mi].join(`
`)}
`}function hd(t){return t==="enabled"?{write:!0}:t==="disabled"?{write:!1,remove:!0}:{write:!1}}function Qy(t,e){let r=t.split(`
`),n=r.indexOf(fi),o=r.indexOf(mi),i=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...i,...r.slice(o+1)].join(`
`);let s=r.indexOf(fd);if(s!==-1){let l=r.length;for(let d=s+1;d<r.length;d++)if(/^#{1,2} /.test(r[d])){l=d;break}let c=r.slice(0,s).join(`
`),u=r.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${e}${u}`}if(t.length===0)return e;let a=t.endsWith(`
`)?"":`
`;return`${t}${a}${e}`}async function Zy(t,e){let r="";try{r=await(0,Fe.readFile)(t,"utf-8")}catch(o){if(o.code!=="ENOENT"){wt.warn("Failed to read %s: %s \u2014 skipping",t,o.message);return}}let n=Qy(r,e);if(n!==r)try{await(0,Fe.mkdir)((0,rr.dirname)(t),{recursive:!0}),await(0,Fe.writeFile)(t,n,"utf-8"),wt.info("Updated %s with Jolli Memory instructions",t)}catch(o){wt.warn("Failed to write %s: %s",t,o.message)}}async function gd(t){let e=Yy(),r=(0,pi.homedir)();for(let n of md)t[n.host]&&await Zy((0,rr.join)(r,...n.relPath),e)}function ew(t){let e=t.split(`
`),r=e.indexOf(fi),n=e.indexOf(mi);if(r===-1||n===-1||n<r)return t;let o=r>0&&e[r-1]===""?r-1:r;return[...e.slice(0,o),...e.slice(n+1)].join(`
`)}async function tw(t){let e;try{e=await(0,Fe.readFile)(t,"utf-8")}catch(n){n.code!=="ENOENT"&&wt.warn("Failed to read %s: %s \u2014 skipping",t,n.message);return}let r=ew(e);if(r!==e)try{await(0,Fe.writeFile)(t,r,"utf-8"),wt.info("Removed Jolli Memory instructions from %s",t)}catch(n){wt.warn("Failed to write %s: %s",t,n.message)}}async function yd(){let t=(0,pi.homedir)();for(let e of md)await tw((0,rr.join)(t,...e.relPath))}var Ae=require("node:os"),X=require("node:path");ze();y();var St=require("node:fs/promises"),nr=require("node:path");ze();y();var hi=f("McpRegistration"),gi="jollimemory";function rw(t,e,r,n){return t==="win32"&&r?{command:"node",args:[r,...n]}:{command:e,args:[...n]}}function yi(t,e,r){return rw(t,e,r,["mcp"])}function wi(t){let e=si(sn(t));return e?(0,nr.join)(e.distDir,"Cli.js"):void 0}var wd="/.mcp.json";async function Sd(t){let e=(0,nr.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,St.readFile)(e,"utf-8"))}catch(l){if(l.code!=="ENOENT"){hi.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",e,String(l));return}r={}}let n=r.mcpServers??{},o=$e(),i=(0,nr.join)(o,"run-cli"),s=process.platform==="win32"?wi(o):void 0;n[gi]=yi(process.platform,i,s);let a={...r,mcpServers:n};await(0,St.writeFile)(e,`${JSON.stringify(a,null,2)}
`,"utf-8"),hi.info("Registered MCP server in %s",e)}async function bd(t){let e=(0,nr.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,St.readFile)(e,"utf-8"))}catch{return}r.mcpServers?.[gi]&&(delete r.mcpServers[gi],await(0,St.writeFile)(e,`${JSON.stringify(r,null,2)}
`,"utf-8"),hi.info("Removed MCP server from %s",e))}var Je=require("node:fs/promises"),Ed=require("node:path");y();var Si=f("CodexTomlWriter"),gn="[mcp_servers.jollimemory]";function kd(t){return`${gn}
command = ${JSON.stringify(t.command)}
args = ${JSON.stringify(t.args??[])}
`}function vd(t){if(t.startsWith(gn))return 0;let e=t.indexOf(`
${gn}`);return e===-1?-1:e+1}function Rd(t){let e=vd(t);if(e===-1)return t;let r=t.indexOf(`
[`,e+gn.length),n=r===-1?t.length:r+1,o=t.slice(0,e),i=t.slice(n);return o===""||i===""?o+i:`${o.replace(/\n+$/,"")}

${i}`}async function xd(t,e){let r="";try{r=await(0,Je.readFile)(t,"utf-8")}catch(i){if(i.code!=="ENOENT"){Si.warn("Skipping Codex MCP: %s unreadable (%s)",t,String(i));return}}let n=Rd(r).replace(/\s*$/,""),o=n.length===0?kd(e):`${n}

${kd(e)}`;await(0,Je.mkdir)((0,Ed.dirname)(t),{recursive:!0}),await(0,Je.writeFile)(t,o,"utf-8"),Si.info("Registered Codex MCP server in %s",t)}async function Cd(t){let e;try{e=await(0,Je.readFile)(t,"utf-8")}catch{return}vd(e)!==-1&&(await(0,Je.writeFile)(t,`${Rd(e).replace(/\s*$/,"")}
`,"utf-8"),Si.info("Removed Codex MCP server from %s",t))}var qe=require("node:fs/promises"),Pd=require("node:path");y();var bi=f("JsonMcpWriter"),ki="jollimemory",Id="mcpServers";async function bt(t,e,r=Id){let n;try{let i=await(0,qe.readFile)(t,"utf-8");n=i.trim()===""?{}:JSON.parse(i)}catch(i){if(i.code!=="ENOENT"){bi.warn("Skipping MCP registration: %s unreadable/invalid (%s)",t,String(i));return}n={}}let o=n[r]??{};o[ki]=e,await(0,qe.mkdir)((0,Pd.dirname)(t),{recursive:!0}),await(0,qe.writeFile)(t,`${JSON.stringify({...n,[r]:o},null,2)}
`,"utf-8"),bi.info("Registered MCP server in %s",t)}async function kt(t,e=Id){let r;try{r=JSON.parse(await(0,qe.readFile)(t,"utf-8"))}catch{return}let n=r[e];n?.[ki]&&(delete n[ki],await(0,qe.writeFile)(t,`${JSON.stringify(r,null,2)}
`,"utf-8"),bi.info("Removed MCP server from %s",t))}var nw=f("HostRegistrars"),ow={host:"claude",scope:"repo",register:Sd,remove:bd,gitExcludePaths:()=>[wd]};function Et(){let t=$e(),e=process.platform==="win32"?wi(t):void 0;return yi(process.platform,(0,X.join)(t,"run-cli"),e)}var iw={host:"cursor",scope:"repo",register:t=>bt((0,X.join)(t,".cursor","mcp.json"),{...Et()}),remove:t=>kt((0,X.join)(t,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},sw={host:"gemini",scope:"global",register:()=>bt((0,X.join)((0,Ae.homedir)(),".gemini","settings.json"),{...Et()}),remove:()=>kt((0,X.join)((0,Ae.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},aw={host:"codex",scope:"global",register:()=>xd((0,X.join)((0,Ae.homedir)(),".codex","config.toml"),Et()),remove:()=>Cd((0,X.join)((0,Ae.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},lw={host:"opencode",scope:"global",register:()=>{let t=Et(),e={type:"local",command:[t.command,...t.args],enabled:!0};return bt((0,X.join)((0,Ae.homedir)(),".config","opencode","opencode.json"),e,"mcp")},remove:()=>kt((0,X.join)((0,Ae.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},cw={host:"copilot",scope:"global",register:()=>bt((0,X.join)((0,Ae.homedir)(),".copilot","mcp-config.json"),{...Et()}),remove:()=>kt((0,X.join)((0,Ae.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},uw={host:"copilotChat",scope:"global",register:()=>{let t=Et(),e={type:"stdio",command:t.command,args:t.args};return bt((0,X.join)(Ie("Code"),"User","mcp.json"),e,"servers")},remove:()=>kt((0,X.join)(Ie("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]};function or(t){let e=[];return t.claude&&e.push(ow),t.cursor&&e.push(iw),t.gemini&&e.push(sw),t.codex&&e.push(aw),t.opencode&&e.push(lw),t.copilot&&e.push(cw),t.copilotChat&&e.push(uw),e}var dw={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0};async function Ei(t,e,r,n){for(let o of t)try{await n(o)}catch(i){nw.warn("MCP %s failed for %s in %s (non-fatal): %s",r,o.host,e,String(i))}}async function Td(t,e){let r=or(e).filter(n=>n.scope==="repo");await Ei(r,t,"registration",n=>n.register(t))}async function Ad(t){let e=or(t).filter(r=>r.scope==="global");await Ei(e,"(global)","registration",r=>r.register(""))}async function vi(t){let e=or(dw).filter(r=>r.scope==="repo");await Ei(e,t,"removal",r=>r.remove(t))}var Y=require("node:fs/promises"),V=require("node:path");ve();y();var de=f("SkillInstaller"),vt="1.0.1",_d=["jollimemory-recall","jolli-memory-recall"],ir=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],yn=[".claude","skills"],Ri=[{name:"jolli-recall",build:yw},{name:"jolli-search",build:ww},{name:"jolli-local-run",build:Sw},{name:"jolli-remote-run",build:bw},{name:"jolli",build:kw}],Od=["jolli-pr"],$d=ir.flatMap(t=>Ri.map(e=>`/${t.relativeDir.join("/")}/${e.name}/`)),Rt=["/.claude/skills/jolli/"],Md=[...ir.map(t=>`/${t.relativeDir.join("/")}/jolli/`),...Rt];async function pw(t,e={}){for(let r of _d){let n=(0,V.join)(t,".claude","skills",r);try{await(0,Y.rm)(n,{recursive:!0,force:!0})}catch{}}await xi(t);for(let r of ir){if(!r.enabled(e))continue;let n=(0,V.join)(t,...r.relativeDir);for(let o of Ri)await jd(n,o.name,o.build())}}async function xi(t){for(let e of ir){let r=(0,V.join)(t,...e.relativeDir);for(let n of Od)await fw((0,V.join)(r,n))}}async function fw(t){let e=(0,V.join)(t,"SKILL.md"),r;try{r=await(0,Y.readFile)(e,"utf-8")}catch{return}if(!Ci(r)){de.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",t);return}try{await(0,Y.rm)(t,{recursive:!0,force:!0}),de.info("Removed retired Jolli skill at %s",t)}catch(n){de.warn("Failed to remove retired skill at %s: %s",t,n.message)}}async function Ld(t,e={}){return pw(t,e)}async function wn(t){let e=(0,V.join)(t,...yn),r=(0,V.join)(e,"jolli","SKILL.md");try{if(!(await(0,Y.readFile)(r,"utf-8")).includes('vendor: "jolli.ai"')){de.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",r);return}}catch{}await jd(e,"jolli",Fd())}async function Sn(t){try{let e=(0,V.join)(t,...yn,"jolli","SKILL.md");return await(0,Y.readFile)(e,"utf-8")===Fd()}catch{return!1}}async function Nd(t){let e=[...ir.map(r=>r.relativeDir),yn];for(let r of e){let n=(0,V.join)(t,...r,"jolli"),o=(0,V.join)(n,"SKILL.md"),i;try{i=await(0,Y.readFile)(o,"utf-8")}catch{continue}if(i.includes('vendor: "jolli.ai"'))try{await(0,Y.rm)(n,{recursive:!0,force:!0}),de.info("Removed Jolli umbrella menu at %s",n)}catch(s){de.warn("Failed to remove umbrella at %s: %s",n,s.message)}}}var mw=[...Ri.filter(t=>t.name!=="jolli").map(t=>t.name),...Od,..._d];async function bn(t){for(let e of mw){let r=(0,V.join)(t,...yn,e),n=(0,V.join)(r,"SKILL.md"),o;try{o=await(0,Y.readFile)(n,"utf-8")}catch{continue}if(!Ci(o)){de.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",r);continue}try{await(0,Y.rm)(r,{recursive:!0,force:!0}),de.info("Removed legacy Jolli skill at %s",r)}catch(i){de.warn("Failed to remove legacy skill at %s: %s",r,i.message)}}}var hw=/(?:^|\n)[ \t]*revision:\s*(\d+)/,gw=-1;function Dd(t){let e=t.match(hw),r=e?Number.parseInt(e[1],10):Number.NaN;return Number.isFinite(r)?r:gw}function Ci(t){return t.includes('vendor: "jolli.ai"')||t.includes("jolli-skill-version:")}async function jd(t,e,r){let n=(0,V.join)(t,e),o=(0,V.join)(n,"SKILL.md"),i=Dd(r);try{let s=await(0,Y.readFile)(o,"utf-8");if(!Ci(s)){de.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",e);return}if(Dd(s)>=i)return}catch{}try{await(0,Y.mkdir)(n,{recursive:!0}),await P(o,r),de.info("Wrote SKILL.md (revision %d) to %s",i,o)}catch(s){de.warn("Failed to write %s SKILL.md: %s",e,s.message)}}var kn=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;function Hd(t,e){return`${kn}

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
vector.`}function yw(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${vt}"
  revision: 1
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

If \`mcp__jollimemory__recall\` is available, call it with \`{ "branch": "<user-arg>" }\`
(omit \`branch\` when \`<user-arg>\` is empty). It returns a \`type\`-tagged object \u2014
\`recall\` / \`catalog\` / \`error\` \u2014 identical to the CLI fallback below.

### Fallback: CLI here-doc

If no such tool is available, use:

${Hd("recall"," --format json")}

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
`}function ww(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${vt}"
  revision: 1
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

If \`mcp__jollimemory__search\` is available, call it with:

\`\`\`json
{ "query": "<query>", "limit": 20 }
\`\`\`

Returns \`{ "hits": [ { type, title, snippet, branch, commitDate, slug, hash, score } ] }\`,
relevance-ranked (BM25). Proceed to Step 3 with these hits.

### Fallback: CLI here-doc

If no such tool is available, use:

${Hd("search"," --format json")}

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
`}function Sw(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${vt}"
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

${kn}

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
`}function bw(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${vt}"
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

${kn}

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
`}function kw(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills (recall, search, run a workflow local or remote, workflow history) plus the Jolli MCP tools registered in this session, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${vt}"
  revision: 5
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

${kn}

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

Surface every tool whose name starts with \`mcp__jollimemory__\` that is available
in the current session \u2014 for example \`recall\`, \`search\`, \`get_pr_description\`,
\`queue_status\`, and any manifest-driven platform tools (space, article, and the
like). Route a choice by calling the matching \`mcp__jollimemory__*\` tool.

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
`}function Fd(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${vt}"
  revision: 6
  vendor: "jolli.ai"
---

# Jolli

The single front door for Jolli. Rather than dumping a static list, it reads how
Jolli is set up in THIS repo and guides the next step: if setup is incomplete it
walks the user into \`/jolli:init\`; once everything is wired it shows a short
status snapshot and routes the user's choice to the right skill or Jolli MCP
tool. It is a friendly front door \u2014 it **never** re-implements any action, it
only reads status and invokes an existing skill or an existing MCP tool. The
standalone \`/jolli:init\`, \`/jolli:recall\`, \`/jolli:search\`, \`/jolli:push\`
commands all keep working unchanged; this is layered on top of them, not a
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
- \`account.jolliApiKeyConfigured\` / \`account.anthropicKeyConfigured\` \u2014 is a
  generation credential present?
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
  - \`local-agent\` \u2192 **yes** (memories generate through the user's local Claude
    subscription \u2014 no API key and no Jolli sign-in required). This is the plugin's
    default, so a freshly-installed plugin repo can already generate.
  - \`jolli\` \u2192 yes only if \`account.jolliApiKeyConfigured\`.
  - \`anthropic\` \u2192 yes only if \`account.anthropicKeyConfigured\`.
  - \`null\` / unset \u2192 yes if \`account.jolliApiKeyConfigured\` OR
    \`account.anthropicKeyConfigured\`.

  (\`account.signedIn\` alone does NOT count \u2014 an OAuth token is a sync credential,
  not a generation one.)
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
  \u2713 signed in \xB7 <account.site>        (or "\u2713 Jolli key set" / "\u2713 Anthropic key set" when not signed in)
  \u2713 enabled \xB7 <storedMemories> memories
  \u2713 syncing \xB7 Space "<space.name>"    (ONLY when \`space\` is non-null; omit the whole line otherwise)

  Jolli is listening \u2014 last memory saved.
  \`\`\`

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

### Jolli MCP tools (whatever is registered this session)

Surface every tool whose name contains \`jollimemory\` that is available in the
current session \u2014 for example \`recall\`, \`search\`, \`get_pr_description\`,
\`queue_status\`, \`status\`, and the Jolli Space tools (\`list_spaces\`,
\`bind_space\`, \`push_memory\`). Route a choice by calling the matching Jolli
MCP tool.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now. If no Jolli MCP tools are registered, present just the
plugin skills above.
`}var I=f("Installer");function vw(t,e){return process.platform==="linux"?t===e:t.toLowerCase()===e.toLowerCase()}async function Rw(t){let e=await Se(),r=hd(e.globalInstructions);if(r.write){let n=t?.codexDetected??await so(),o=t?.geminiDetected??await co();await gd({claude:e.claudeEnabled!==!1,gemini:o&&e.geminiEnabled!==!1,codex:n&&e.codexEnabled!==!1})}else r.remove&&await yd()}async function qd(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0,i=e?.repoHooksOnly===!0;if(o&&i)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:n};if(!await mr(r))return I.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",r),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${r})`,warnings:n};I.info(i?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let s=null;try{let a=await Se(),l=e?.automatic?[r]:await lt(r),c=e?.automatic?{timeoutMs:200,pollMs:25}:void 0,u=(0,nt.dirname)((0,Jd.fileURLToPath)(__jmImportMetaUrl)),d=e?.source??"cli",m=e?.sourceTag??(d==="vscode-extension"?oi(u):"cli");if(!Wt(m))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(m)}`,warnings:n};let p=async()=>{if(!await li())return!1;try{await zu()}catch(x){I.warn("Legacy dist-path migration failed (non-fatal): %s",x.message)}if(!await Yt(m))return!1;try{let x=await Ku();x.length>0&&I.info("Pruned stale dist-paths entries: %s",x.join(", "))}catch(x){I.warn("Pruning stale dist-paths failed (non-fatal): %s",x.message)}return!0},C=c?await Ln(p,c):await Ln(p);if(!C.acquired||C.value!==!0)return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:n};if(!o){if(s=c?await Mt(r,c):await Mt(r),!s)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};if(e?.respectManualDisable&&await Ve(r))return{success:!0,message:"Repository remains manually disabled",warnings:n}}let A=i?!1:await so(),O=i?!1:await co(),k=i?!1:await _a(),D=i?!1:await ja(),$=i?!1:await Pa(),K=i?!1:await ba(),Z=i?!1:await ha()||await da(),H={};for(let x of l){let pe=await Vn(x),ip=(0,nt.join)(pe,"sessions.json");try{await(0,En.writeFile)(ip,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(it){it.code!=="EEXIST"&&I.warn("Failed to bootstrap sessions.json in %s: %s",x,it.message)}if(i){if(await wn(x),await bn(x),await xi(x),await xr(x,[...Rt]),a.claudeEnabled!==!1){let it=await zn(x);(x===r||H.path===void 0)&&(H=it)}continue}await Ld(x,{claudeEnabled:a.claudeEnabled});let Li={claude:a.claudeEnabled!==!1,codex:A,cursor:k,gemini:O,opencode:D,copilot:$,copilotChat:K};if(await ra(x,[...$d,...Rt,...or(Li).flatMap(it=>it.gitExcludePaths())]),await Td(x,Li),o||a.claudeEnabled===!1)continue;let Cn=await zn(x);Cn.warning&&n.push(Cn.warning),(x===r||H.path===void 0)&&(H=Cn)}await Ad({claude:!1,cursor:!1,codex:A,gemini:O,opencode:D,copilot:$,copilotChat:K}),i||await Rw({codexDetected:A,geminiDetected:O});let De={},Be={},Ue={},ot={},ar={};o||(De=await nd(r),De.warning&&n.push(De.warning),Be=await od(r),Be.warning&&n.push(Be.warning),Ue=await id(r),Ue.warning&&n.push(Ue.warning),ot=await sd(r),ot.warning&&n.push(ot.warning),ar=await ad(r),ar.warning&&n.push(ar.warning)),A&&a.codexEnabled===void 0&&(await Re({codexEnabled:!0}),I.info("Codex CLI detected \u2014 enabled Codex session discovery"));let xn;if(O&&a.geminiEnabled!==!1){if(!o)for(let x of l){let pe=await ci(x);(x===r||xn===void 0)&&(xn=pe.path)}a.geminiEnabled===void 0&&(await Re({geminiEnabled:!0}),I.info("Gemini CLI detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&D&&a.openCodeEnabled===void 0&&(await Re({openCodeEnabled:!0}),I.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let op=i?!1:await Ia(),_i=a.cursorEnabled!==!1&&k,Oi=a.cursorEnabled!==!1&&op;(_i||Oi)&&a.cursorEnabled===void 0&&(await Re({cursorEnabled:!0}),I.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",_i,Oi));let $i=a.copilotEnabled!==!1&&$,Mi=a.copilotEnabled!==!1&&K;if(($i||Mi)&&a.copilotEnabled===void 0&&(await Re({copilotEnabled:!0}),I.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",$i,Mi)),Z&&a.clineEnabled===void 0&&(await Re({clineEnabled:!0}),I.info("Cline detected \u2014 enabled Cline session discovery")),!i)for(let x of l)await xw(x);if(e?.source==="vscode-extension")I.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(i)I.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let{migrateSchemaToV5:x}=await Promise.resolve().then(()=>(Mo(),Xl)),pe=await x(r);I.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",pe.alreadyDone,pe.fresh,pe.migrated,pe.skipped)}catch(x){I.warn("Schema v5 migration failed (non-fatal): %s",x.message)}if(e?.clearManualDisableOnSuccess&&!o)try{await jn(r,!1)}catch(x){let pe=x.message;n.push(`Enabled, but could not clear the manual-disable opt-out (${pe}). Run enable again to clear it.`),I.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",pe)}return I.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:n,claudeSettingsPath:H.path,gitHookPath:De.path,postRewriteHookPath:Be.path,prepareMsgHookPath:Ue.path,postMergeHookPath:ot.path,prePushHookPath:ar.path,geminiSettingsPath:xn}}catch(a){let l=`Installation failed: ${a.message}`;return I.error(l),{success:!1,message:l,warnings:n}}finally{s&&await s.release()}}async function xw(t){let e=oe(t);try{await(0,En.stat)(e)}catch{return}let r=$e();if(vw((0,nt.resolve)(e),(0,nt.resolve)(r)))return;let n=await Lt(e),o={};for(let[c,u]of Object.entries(n))u!==void 0&&(o[c]=u);if(Object.keys(o).length===0)return;let i=await Lt(r),s={};for(let[c,u]of Object.entries(o))i[c]===void 0&&(s[c]=u);Object.keys(s).length>0&&await kr(s,r);let a={};for(let c of Object.keys(s))a[c]=void 0;Object.keys(a).length>0&&await kr(a,e);let l=Object.keys(o).filter(c=>!(c in s));for(let c of l)I.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",t,c,String(o[c]),String(i[c]));I.info("Migrated %d config fields from worktree %s to global",Object.keys(s).length,t)}async function Bd(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0;I.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let i=null;try{if(!o&&!e?.repoLockHeld&&(i=await Mt(r),!i))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};!o&&e?.persistManualDisable&&await jn(r,!0);let s;try{s=await lt(r)}catch{s=[r]}if(o){for(let l of s)try{await vi(l)}catch(c){I.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return I.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:n}}for(let l of s){let c=await Xn(l);c.warning&&n.push(c.warning),await ui(l);try{await vi(l)}catch(u){I.warn("MCP removal failed in %s (non-fatal): %s",l,u.message)}e?.preserveMenu||await Nd(l)}let a=await ld(r);return a.warning&&n.push(a.warning),await cd(r),await ud(r),await dd(r),await pd(r),e?.preserveMenu||await na(r,Md),n.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),I.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:n}}catch(s){let a=`Uninstallation failed: ${s.message}`;return I.error(a),{success:!1,message:a,warnings:n}}finally{i&&await i.release()}}y();function vn(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var Q=require("node:fs"),xt=require("node:path");function Rn(){return"claude-plugin"}ye();function Ud(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}ze();To();Fr();qr();pt();y();We();var Wd="(This login is SEPARATE from Claude Desktop \u2014 Desktop stays signed in on its own.)",Gd=["1) Re-authenticate the CLI:  claude auth login","2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or  --set aiProvider=jolli  to use your Jolli Space)"],Vd=["[Jolli Memory] Memory generation failed for a recent commit: the Claude login used for local generation has expired.",Wd,"\u2192 Fix with either:",...Gd.map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`),MC=["\u26A0 Jolli Memory: couldn't generate memory \u2014 the Claude login used for local generation has expired.",`  ${Wd}`,"  \u2192 Fix with either:",...Gd.map(t=>`      ${t}`)].join(`
`);var ke=f("SessionStartHook"),Cw=new Set(["main","master","develop","development","staging","production"]),Pi=500,zd="login-reminder-dismissed",Pw=["[Jolli Memory] Not signed in \u2014 no memories are being generated for your commits.","\u2192 Run /jolli:login to sign in to Jolli (AI summaries, no Anthropic API key needed).",`(To stop this reminder without signing in, create an empty file at .jolli/jollimemory/${zd} in this repo.)`].join(`
`);function Iw(t,e,r){return t!=="claude-plugin"||e||r?null:Pw}async function Xd(t,e){if(t!=="claude-plugin"||e.aiProvider!==void 0)return!1;try{return await Re({aiProvider:"local-agent",localAgentTool:"claude-code"}),ke.info("Seeded default aiProvider=local-agent for the Claude Code plugin"),!0}catch(r){return ke.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function Tw(t,e=Rn()){let r=await Se(),n=Ud(r),o=(0,xt.join)(t,".jolli","jollimemory",zd),i=(0,Q.existsSync)(o);if(n&&i)try{(0,Q.rmSync)(o)}catch{}return Iw(e,n,i)}async function Aw(t,e){try{let r=await At(ee,`summaries/${t}.json`,e);return r?Al(JSON.parse(r)):!1}catch(r){return ke.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function Dw(t,e=Rn()){if(e!=="claude-plugin")return null;let r=Zd(t);if(!r)return null;let n=await Oo(t);if(!n)return null;let o=n.entries.filter(s=>s.branch===r&&(s.parentCommitHash===null||s.parentCommitHash===void 0));if(o.length===0)return null;let i=[...o].sort((s,a)=>new Date(J(a)).getTime()-new Date(J(s)).getTime())[0];return await Aw(i.commitHash,t)?Vd:null}async function _w(){if(cr()){ke.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await vn(),{cwd:e}=JSON.parse(t),r=e??process.cwd();if(ur(r),ke.info("SessionStartHook invoked (cwd=%s)",r),await Ve(r)){ke.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await Ti(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):ke.info("No briefing or reminder generated (skipped or timed out)")}catch(t){ke.info("SessionStartHook failed: %s",t.message)}}async function Ti(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[i,s,a]=await Promise.all([n?Promise.race([Ow(t),Ii(Pi)]):Promise.resolve(null),o?Promise.race([Dw(t,e),Ii(Pi)]):Promise.resolve(null),o?Promise.race([Tw(t,e),Ii(Pi)]):Promise.resolve(null)]),l=[s,a,i].filter(c=>!!c);return l.length===0?null:(ke.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function Ow(t){let e=Zd(t);if(!e||Cw.has(e))return null;let r=Fw(t,e);if(r)return r;let n=await Oo(t);if(!n)return null;let o=n.entries.filter(p=>p.branch===e&&(p.parentCommitHash===null||p.parentCommitHash===void 0));if(o.length===0)return null;let i=[...o].sort((p,C)=>new Date(J(C)).getTime()-new Date(J(p)).getTime()),s=i[0],a=i[i.length-1];if(i.length===1&&qw(J(s)))return null;let l=await $w(s.commitHash,t),c=Mw(t,e),u=Lw(i),d=Nw(e,i,s,a,l,c,u),m=Qd(t);return Jw(t,e,m??s.commitHash,d),d}async function $w(t,e){try{let r=await At(ee,`summaries/${t}.json`,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=dt(n),i=o.length>0?o[o.length-1].title:null,s=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&s.push(a.decisions);return{lastTopicTitle:i,keyDecisions:s}}catch(r){return ke.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function Mw(t,e){try{let r=(0,xt.join)(t,".jolli","jollimemory","plans.json");if(!(0,Q.existsSync)(r))return[];let n=JSON.parse((0,Q.readFileSync)(r,"utf-8")),o=Qs(n).registry,i=[];for(let s of Object.values(o.plans))!s.commitHash&&s.title&&i.push(s.title);return i}catch{return[]}}function Lw(t){let e=0,r=0,n=0,o=!1;for(let i of t)i.diffStats&&(e+=i.diffStats.filesChanged,r+=i.diffStats.insertions,n+=i.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function Nw(t,e,r,n,o,i,s){let a=e.length,l=Kd(J(n)),c=Kd(J(r)),u=Bw(J(r),new Date().toISOString()),d=[];d.push(`[Jolli Memory \u2014 ${t}]`);let m=`${a} commits (${l} ~ ${c})`;s&&(m+=` | ${s.filesChanged} files, +${s.insertions} -${s.deletions}`),d.push(m);let p=o.lastTopicTitle??r.commitMessage;if(d.push(`Last: ${p} (${c})`),o.keyDecisions.length>0){let A=Hw(o.keyDecisions);d.push(`Decisions: ${A}`)}i.length>0&&d.push(`Plans: ${i.join("; ")}`);let C=jw(u,Rn());return C&&d.push(C),d.join(`
`)}function jw(t,e){if(t<=0)return null;let r=e==="claude-plugin"?"/jolli:recall":"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function Hw(t){let r=[],n=0;for(let o of t){let i=o.replace(/[.;]\s*$/,"").trim();if(i.length>200&&(i=`${i.slice(0,199)}\u2026`),n+i.length>200&&r.length>0)break;r.push(i),n+=i.length+2}return r.join("; ")}function Yd(t){return(0,xt.join)(t,".jolli","jollimemory","briefing-cache.json")}function Fw(t,e){let r=Yd(t);if(!(0,Q.existsSync)(r))return null;try{let n=JSON.parse((0,Q.readFileSync)(r,"utf-8"));if(n.branch!==e)return null;let o=Qd(t);return!o||n.lastCommitHash!==o?null:n.briefingText}catch{return null}}function Jw(t,e,r,n){let o=Yd(t),i={branch:e,lastCommitHash:r,briefingText:n,generatedAt:new Date().toISOString()};try{let s=(0,xt.dirname)(o);(0,Q.existsSync)(s)||(0,Q.mkdirSync)(s,{recursive:!0}),(0,Q.writeFileSync)(o,JSON.stringify(i,null,"	"),"utf-8")}catch{}}function Qd(t){try{return Tt("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function Zd(t){try{return Tt("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function Ii(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function qw(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function Bw(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function Kd(t){return t?t.split("T")[0]:"unknown"}process.argv[1]&&__jmImportMetaUrl.endsWith(process.argv[1].replace(/\\/g,"/"))&&_w();var Ct=f("PluginBootstrapHook"),Ai="claude-plugin",ep={timeoutMs:200,pollMs:25};function sr(t,e){return!t&&!e?null:{hookSpecificOutput:{hookEventName:"SessionStart",...t?{reloadSkills:!0}:{},...e?{additionalContext:e}:{}}}}async function rp(t,e){if(!await mr(t))return null;let r=await U(["rev-parse","--show-toplevel"],t);if(r.exitCode!==0||!r.stdout.trim())return null;let n=r.stdout.trim();ur(n);let o=await Sn(n),i=await ta(n),s=!1;if(!(await $n(n,async()=>{if(await wn(n),await bn(n),await xr(n,[...Rt]),s=await Ve(n),s){await Bd(n,{preserveMenu:!0,repoLockHeld:!0});return}if((await Se()).claudeEnabled!==!1&&e?.sessionId&&e.transcriptPath)try{await Ys({sessionId:e.sessionId,transcriptPath:e.transcriptPath,updatedAt:new Date().toISOString(),source:"claude"},n)}catch(p){Ct.warn("Plugin bootstrap could not record the first session: %s",p.message)}},ep)).acquired){Ct.info("Plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy");let m=!o&&await Sn(n);return sr(m,null)}let l=!o&&await Sn(n);if(s)return sr(l,null);let c=await qd(n,{repoHooksOnly:!0,sourceTag:Ai,respectManualDisable:!0,automatic:!0});if(!c.success)return Ct.warn("Plugin repo-hook reconciliation failed: %s",c.message),sr(l,null);let u=null;return(await $n(n,async()=>{if(await Ve(n))return;let m=await Se();if(m.claudeEnabled===!1)return;await Xd(Ai,m);let p=i.stop&&i.sessionStart;u=await Ti(n,Ai,{includeBriefing:!p,includePluginReminders:!0})},ep)).acquired||Ct.info("Plugin context deferred \u2014 repo hook lifecycle lock is busy"),sr(l,u)}async function np(){if(cr()){Ct.info("Plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await vn(),e=t.trim()?JSON.parse(t):{},r=await rp(e.cwd??process.cwd(),{sessionId:e.session_id,transcriptPath:e.transcript_path});r&&process.stdout.write(JSON.stringify(r))}catch(t){Ct.info("Plugin bootstrap failed: %s",t.message)}}function Uw(){let t=(0,tp.fileURLToPath)(__jmImportMetaUrl),e=process.argv[1];return!process.env.VITEST&&!!e&&(0,Di.resolve)(e)===(0,Di.resolve)(t)}Uw()&&np().catch(()=>{console.error("[PluginBootstrapHook] Fatal error: bootstrap failed."),process.exit(0)});0&&(module.exports={buildPluginBootstrapOutput,main,runPluginBootstrap});
