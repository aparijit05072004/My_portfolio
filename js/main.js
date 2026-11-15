(function(){
var NS="http://www.w3.org/2000/svg",root=document.documentElement;
function $(s){return document.querySelector(s)}function $$(s){return[].slice.call(document.querySelectorAll(s))}
/* background doodles: [symbol, x, y, size, rotation]; one layout for wide screens, one for tall (phones) */
var WIDE=[["net",40,110,74,-8],["spark",1090,60,60,10],["chat",980,330,70,6],["scatter",70,420,76,-6],["tree",1060,560,72,8],["bars",300,740,70,-5],["pie",720,820,66,12],["db",560,90,60,-10],["code",150,730,64,-6],["pulse",880,720,70,0],["cell",470,420,66,7],["table",820,170,64,-4],["spark",360,260,40,0],["code",1100,850,52,8]],
TALL=[["net",100,140,56,-8],["spark",440,110,48,10],["chat",430,300,56,6],["scatter",90,380,58,-6],["tree",420,520,56,8],["bars",110,640,56,-5],["pie",300,780,52,12],["code",460,840,48,8],["table",200,230,50,-4],["pulse",260,470,56,0],["db",90,860,50,-10],["cell",300,620,52,6]],bgMode="";
function drawBg(){var tall=innerHeight>innerWidth*1.05,mode=tall?"t":"w";if(mode===bgMode)return;bgMode=mode;var bg=$("#bg");bg.innerHTML="";bg.setAttribute("viewBox",tall?"0 0 600 1000":"0 0 1200 900");
(tall?TALL:WIDE).forEach(function(d){var u=document.createElementNS(NS,"use");u.setAttribute("href","#d-"+d[0]);u.setAttribute("x",d[1]);u.setAttribute("y",d[2]);u.setAttribute("width",d[3]);u.setAttribute("height",d[3]);u.setAttribute("transform","rotate("+d[4]+" "+(d[1]+d[3]/2)+" "+(d[2]+d[3]/2)+")");bg.appendChild(u)})}
drawBg();addEventListener("resize",drawBg);
/* theme */
try{var t=localStorage.getItem("theme");if(t)root.setAttribute("data-theme",t)}catch(e){}
$("#theme").onclick=function(){var cur=root.getAttribute("data-theme"),dark=cur?cur==="dark":matchMedia("(prefers-color-scheme:dark)").matches,n=dark?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem("theme",n)}catch(e){}};
/* mobile menu */
var nav=$("#nav"),m=$("#menu");
m.onclick=function(){m.setAttribute("aria-expanded",nav.classList.toggle("open"))};
nav.addEventListener("click",function(){nav.classList.remove("open");m.setAttribute("aria-expanded","false")});
/* project filter: shows only the projects whose data-c contains the chosen tag */
var rows=$$("#plist .row"),cnt=$("#cnt");
function filter(f){var n=0;rows.forEach(function(r){var on=f==="all"||r.dataset.c.split(" ").indexOf(f)>-1;r.hidden=!on;if(on)n++});cnt.textContent="Showing "+n+" of "+rows.length+" projects"}
$$(".filters button").forEach(function(b){b.onclick=function(){$$(".filters button").forEach(function(o){o.setAttribute("aria-pressed",o===b)});filter(b.dataset.f)}});
filter("all");
/* button style panel */
var def={s:"glass",t:85,b:7},st=Object.assign({},def);
try{Object.assign(st,JSON.parse(localStorage.getItem("btn")||"{}"))}catch(e){}
function apply(){var f=100-st.t;root.setAttribute("data-btn",st.s);root.style.setProperty("--fill",f+"%");root.style.setProperty("--fill2",Math.min(100,f+20)+"%");root.style.setProperty("--blur",st.b+"px");
$("#rt").value=st.t;$("#rb").value=st.b;$("#vt").textContent=st.t+"%";$("#vb").textContent=st.b+"px";
$$(".seg button").forEach(function(x){x.setAttribute("aria-pressed",x.dataset.s===st.s)});
$("#rt").disabled=$("#rb").disabled=st.s!=="glass";
try{localStorage.setItem("btn",JSON.stringify(st))}catch(e){}}
$$(".seg button").forEach(function(x){x.onclick=function(){st.s=x.dataset.s;apply()}});
$("#rt").oninput=function(){st.t=+this.value;apply()};$("#rb").oninput=function(){st.b=+this.value;apply()};
$("#rs").onclick=function(){st=Object.assign({},def);apply()};
var cz=$("#cz"),op=$("#cz-open");
op.onclick=function(){cz.hidden=!cz.hidden;op.setAttribute("aria-expanded",!cz.hidden)};
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!cz.hidden){cz.hidden=true;op.setAttribute("aria-expanded","false");op.focus()}});
apply();
/* highlight current section in the nav */
var links=$$("#nav a");
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})})},{rootMargin:"-40% 0px -55% 0px"});
$$("section[id]").forEach(function(s){io.observe(s)})}
})();
