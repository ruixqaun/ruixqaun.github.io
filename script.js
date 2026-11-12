var ids=['home', 'residence', 'materials', 'location', 'calculator', 'contact'];
function go(){var h=(location.hash||'#home').slice(1);if(ids.indexOf(h)<0)h='home';
ids.forEach(function(i){document.getElementById(i).classList.toggle('on',i===h)});
document.querySelectorAll('#nav a').forEach(function(a){a.classList.toggle('on',a.dataset.p===h)});
document.getElementById('nav').classList.remove('open');window.scrollTo(0,0)}
window.addEventListener('hashchange',go);go();
document.querySelectorAll('.zm').forEach(function(i){i.onclick=function(){document.getElementById('lbi').src=i.src;document.getElementById('lb').classList.add('on')}});document.getElementById('lb').onclick=function(){this.classList.remove('on')};
document.getElementById('bg').onclick=function(){document.getElementById('nav').classList.toggle('open')};

(function(){
var el=document.getElementById('v3'),info=document.getElementById('v3i'),chips=document.getElementById('v3c');
if(!el)return;
if(!window.THREE){el.insertAdjacentHTML('beforeend','<p style="padding:60px 20px;text-align:center;color:#E8DCC6">The 3D view could not load.</p>');return}
var T=THREE;
var R=[
["Study",-18,-9,-10,-5,0xB89368,"study","A quiet desk-and-shelves workroom at the back of the house."],
["Fitness",-18,-9,-5,0,0x9A8F7E,"fit","Home gym with a treadmill, bench and weights."],
["Spa",-18,-9,0,4,0x86ABA4,"spa","Private indoor spa pool with a stone surround."],
["Parking",-18,-9,4,10,0x8A8479,"car","Covered parking for one car beside the entrance."],
["Living Room",-9,0,-10,1,0xDDBB8C,"living","Main living space with a sofa, TV wall and large glazing."],
["Kitchen & Dining",-9,0,1,10,0xDDBB8C,"kitchen","Open kitchen with an island and a dining table for four."],
["Master Bedroom",0,9,-10,-3,0xC49A62,"bed","Master suite with a king bed and wardrobe."],
["Bathroom 1",0,9,-3,0,0x86ABA4,"bath","Master bathroom with a tub, vanity and toilet."],
["Atrium Courtyard",0,9,0,10,0x8DAA6E,"atrium","Hidden internal courtyard with a tree and stepping stones, open to the sky. Not built space."],
["Bedroom 2",9,18,-10,-5,0xC49A62,"bed","Bedroom with a double bed and wardrobe."],
["Bathroom 2",9,18,-5,-2,0x86ABA4,"bath","Bathroom serving Bedroom 2."],
["Bedroom 3",9,18,-2,3,0xC49A62,"bed","Bedroom with a double bed and wardrobe."],
["Bathroom 3",9,18,3,6,0x86ABA4,"bath","Bathroom serving Bedroom 3 and 4."],
["Bedroom 4",9,18,6,10,0xC49A62,"bed","Bedroom near the entrance, ideal for guests."]];
var scene=new T.Scene(),cam=new T.PerspectiveCamera(38,1.7,.1,400),ren;
try{ren=new T.WebGLRenderer({antialias:true,alpha:true})}catch(e){el.insertAdjacentHTML('beforeend','<p style="padding:60px 20px;text-align:center;color:#E8DCC6">3D is not supported on this device.</p>');return}
ren.setPixelRatio(Math.min(window.devicePixelRatio||1,2));el.insertBefore(ren.domElement,el.firstChild);
scene.add(new T.AmbientLight(0xfff2de,.85));var dl=new T.DirectionalLight(0xffe2b8,.65);dl.position.set(-25,45,30);scene.add(dl);
function M(c){return new T.MeshLambertMaterial({color:c})}
function B(g,w,h,d,x,y,z,c){var m=new T.Mesh(new T.BoxGeometry(w,h,d),M(c));m.position.set(x,y+h/2,z);g.add(m);return m}
function Cy(g,rt,rb,h,x,y,z,c){var m=new T.Mesh(new T.CylinderGeometry(rt,rb,h,16),M(c));m.position.set(x,y+h/2,z);g.add(m);return m}
function plane(w,d,x,z,c){var m=new T.Mesh(new T.PlaneGeometry(w,d),M(c));m.rotation.x=-Math.PI/2;m.position.set(x,-.02,z);scene.add(m)}
plane(54,36,0,0,0xD9CCB0);plane(40,4,0,12,0x9DB586);plane(3,4,0,12,0xCFC6B2);
function furn(g,t,w,d){
if(t=="bed"){var s=w>8?1:.9;B(g,3.6*s,.5,4.4*s,0,0,-d/2+2.8,0x8A5A33);B(g,3.3*s,.4,4.2*s,0,.5,-d/2+2.8,0xF3EADA);B(g,1.2,.25,.7,-.9,.9,-d/2+1,0xFFFFFF);B(g,1.2,.25,.7,.9,.9,-d/2+1,0xFFFFFF);B(g,3.4*s,.45,1.6*s,0,.9,-d/2+4.2,0xC49A62);B(g,w-1.4,2.3,.7,0,0,d/2-.6,0xB89368)}
if(t=="bath"){B(g,3,.7,1.3,-w/2+2.2,0,0,0xFFFFFF);B(g,1.6,.95,.8,.2,0,-d/2+.8,0xB89368);B(g,.9,.7,1,w/2-1.4,0,0,0xFFFFFF)}
if(t=="living"){B(g,5.2,.95,1.8,-.5,0,2.4,0x7A5A3E);B(g,1.8,.95,3,-3.2,0,.8,0x7A5A3E);B(g,2.6,.45,1.5,-.2,0,-.2,0x2E231B);B(g,5,.03,3.6,-.4,0,.2,0xE8DCC6);B(g,4.6,1,.5,0,0,-d/2+.6,0x3A2D23);B(g,3,1.6,.1,0,1,-d/2+.6,0x14110E)}
if(t=="kitchen"){B(g,w-1.6,1,.8,0,0,-d/2+.7,0xE8DCC6);B(g,w-1.6,.8,.5,0,1.9,-d/2+.55,0xA06B3C);B(g,4.4,1,1.6,0,0,-1,0xC49A62);for(var i=-1;i<2;i++)Cy(g,.35,.35,.75,i*1.4,0,.6,0x3A2D23);B(g,3.4,.8,2,0,0,d/2-2.4,0x8A5A33);[[-1.4,-.4],[1.4,-.4],[-1.4,.4],[1.4,.4]].forEach(function(p){B(g,.7,.9,.7,p[0],0,d/2-2.4+p[1]*3.2,0x3A2D23)})}
if(t=="study"){B(g,3.8,.85,1.4,0,0,-d/2+1.1,0x8A5A33);B(g,1,.9,1,0,0,-d/2+2.5,0x3A2D23);B(g,w-1.2,2.5,.5,0,0,d/2-.4,0xB89368);B(g,1.4,.4,.9,0,.85,-d/2+1.1,0x14110E)}
if(t=="fit"){B(g,1.4,1.1,3,-2.5,0,0,0x3A2D23);B(g,1.4,.5,.2,-2.5,1.1,-1.3,0x14110E);B(g,1.3,.5,2.6,.4,0,0,0x8A5A33);B(g,3.2,.9,.6,2.6,0,-d/2+.7,0x2E231B);B(g,1.4,.04,3.4,2.4,0,.6,0x86ABA4)}
if(t=="spa"){B(g,w-1.4,.4,d-1,0,0,0,0xE8DCC6);B(g,w-2.2,.42,d-1.8,0,.02,0,0x5FB4C4)}
if(t=="car"){B(g,4.4,.8,2,0,.35,0,0x3A3A3A);B(g,2.3,.8,1.8,-.3,1.1,0,0x5A5A5A);[[-1.4,-1],[1.4,-1],[-1.4,1],[1.4,1]].forEach(function(p){var c=Cy(g,.4,.4,.3,p[0],0,p[1],0x14110E);c.rotation.x=Math.PI/2})}
if(t=="atrium"){Cy(g,.3,.4,3,1.5,0,-1,0x6B4A2E);var c=new T.Mesh(new T.SphereGeometry(2.1,16,12),M(0x6F9A4E));c.position.set(1.5,4,-1);g.add(c);Cy(g,.2,.3,1.8,-2.2,0,2,0x6B4A2E);var c2=new T.Mesh(new T.SphereGeometry(1.2,14,10),M(0x86AE62));c2.position.set(-2.2,2.5,2);g.add(c2);[-1.5,0,1.5].forEach(function(z,i){Cy(g,.5,.5,.06,-.5+i*.8,0,z+1,0xB7AF9F)});B(g,2.2,.5,.6,2.4,0,3,0x8A5A33)}}
var walls=[],floors=[],roofs=new T.Group(),btns=[],sel=null,seen={},k=0,cut=true,WH=3.2;
roofs.visible=false;scene.add(roofs);
var wg=new T.BoxGeometry(1,1,1);wg.translate(0,.5,0);var wm=M(0xF3EADA);
function wall(x,z,len,ax){var key=ax+":"+x+":"+z+":"+len;if(seen[key])return;seen[key]=1;var m=new T.Mesh(wg,wm),t=.28+(k%7)*.012;m.userData.f=1+(k%7)*.003;k++;m.position.set(x,.2,z);m.scale.set(ax?len:t,1,ax?t:len);walls.push(m);scene.add(m)}
R.forEach(function(r,i){var x0=r[1],x1=r[2],z0=r[3],z1=r[4],w=x1-x0,d=z1-z0,cx=(x0+x1)/2,cz=(z0+z1)/2;
var f=B(scene,w-.3,.2,d-.3,cx,0,cz,r[5]);f.userData.i=i;floors.push(f);
wall(cx,z0,w,1);wall(cx,z1,w,1);wall(x0,cz,d,0);wall(x1,cz,d,0);
var g=new T.Group();g.position.set(cx,.2,cz);scene.add(g);furn(g,r[6],w,d);
if(r[6]!="atrium"){var rf=B(roofs,w-.1,.3,d-.1,cx,WH+.25,cz,0x8A7F70)}
var b=document.createElement("button");b.textContent=r[0];b.onclick=function(){pick(i)};chips.appendChild(b);btns.push(b)});
function setWalls(){walls.forEach(function(m){m.scale.y=(cut?1:WH)*m.userData.f})}setWalls();
var tg=new T.Vector3(0,.5,0),tgG=new T.Vector3(0,.5,0),th=.55,ph=.95,ds=66,dsG=66,auto=true;
function pick(i){if(sel!=null){floors[sel].material.emissive.setHex(0);btns[sel].classList.remove("on")}
sel=i;floors[i].material.emissive.setHex(0x6A4515);btns[i].classList.add("on");var r=R[i];
info.innerHTML="<small>Single storey</small><h3>"+r[0]+"</h3><p>"+r[7]+"</p>";
tgG.set((r[1]+r[2])/2,.8,(r[3]+r[4])/2);dsG=Math.max(20,(r[2]-r[1]+r[4]-r[3])*1.25);auto=false;ph=Math.min(ph,.85)}
document.getElementById("v3r").onclick=function(){roofs.visible=!roofs.visible;this.textContent="Roof: "+(roofs.visible?"On":"Off");this.classList.toggle("on",roofs.visible)};
document.getElementById("v3w").onclick=function(){cut=!cut;setWalls();this.textContent="Walls: "+(cut?"Cutaway":"Full");this.classList.toggle("on",!cut)};
document.getElementById("v3o").onclick=function(){if(sel!=null){floors[sel].material.emissive.setHex(0);btns[sel].classList.remove("on");sel=null}
tgG.set(0,.5,0);dsG=66;info.innerHTML="<small>Single storey</small><h3>Oakdale Residence</h3><p>Single-storey concrete home. Layout is indicative and will be replaced by the architect’s final plan.</p>"};
function place(){tg.lerp(tgG,.08);ds+=(dsG-ds)*.08;cam.position.set(tg.x+ds*Math.sin(ph)*Math.sin(th),tg.y+ds*Math.cos(ph),tg.z+ds*Math.sin(ph)*Math.cos(th));cam.lookAt(tg)}
var cv=ren.domElement,drag=false,moved=0,lx=0,ly=0;
cv.addEventListener("pointerdown",function(e){drag=true;moved=0;lx=e.clientX;ly=e.clientY;auto=false;cv.setPointerCapture(e.pointerId);cv.style.cursor="grabbing"});
cv.addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-lx,dy=e.clientY-ly;lx=e.clientX;ly=e.clientY;moved+=Math.abs(dx)+Math.abs(dy);th-=dx*.008;ph=Math.max(.2,Math.min(1.45,ph-dy*.006))});
cv.addEventListener("pointerup",function(e){drag=false;cv.style.cursor="grab";if(moved<6){var rc=cv.getBoundingClientRect(),ray=new T.Raycaster();
ray.setFromCamera(new T.Vector2((e.clientX-rc.left)/rc.width*2-1,-((e.clientY-rc.top)/rc.height)*2+1),cam);
var h=ray.intersectObjects(floors);if(h.length)pick(h[0].object.userData.i)}});
cv.addEventListener("wheel",function(e){e.preventDefault();dsG=Math.max(14,Math.min(110,dsG+e.deltaY*.05))},{passive:false});
document.getElementById("v3p").onclick=function(){dsG=Math.max(14,dsG-8)};document.getElementById("v3m").onclick=function(){dsG=Math.min(110,dsG+8)};
function size(){var w=el.clientWidth,h=el.clientHeight;if(!w||!h)return;ren.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
if(window.ResizeObserver)new ResizeObserver(size).observe(el);window.addEventListener("resize",size);size();
(function loop(){requestAnimationFrame(loop);if(!el.offsetParent)return;if(auto)th+=.003;place();ren.render(scene,cam)})();
})();

(function(){
var $=function(i){return document.getElementById(i)};
var fmt=new Intl.NumberFormat("en-US",{style:"currency",currency:"THB",maximumFractionDigits:0});
function calc(){
var P=parseFloat($("mq-price").value),D=parseFloat($("mq-down").value),R=parseFloat($("mq-rate").value),Y=parseFloat($("mq-term").value),e=$("mq-err");
e.textContent="";
if(!(P>0)){e.textContent="Please enter a home price greater than zero.";return}
if(isNaN(D)||D<0){e.textContent="Please enter a valid down payment.";return}
if(D>=P){e.textContent="The down payment must be less than the home price.";return}
if(isNaN(R)||R<0){e.textContent="Please enter a valid interest rate.";return}
if(!(Y>0)){e.textContent="Please enter a loan term of at least 1 year.";return}
var L=P-D,n=Math.round(Y*12),r=R/100/12,m=r===0?L/n:L*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
var total=m*n,intr=total-L,pct=Math.round(L/total*100);
$("mq-out").innerHTML='<div class="mq-res"><div class="mq-hero"><small>Monthly Installment</small><b>'+fmt.format(m)+'</b><em>for '+n+' months</em></div>'
+'<div class="mq-row"><div class="mq-c"><small>Loan Amount</small><b>'+fmt.format(L)+'</b></div><div class="mq-c"><small>Total Interest</small><b>'+fmt.format(intr)+'</b></div></div>'
+'<div class="mq-c"><small>Total Amount Payable</small><b>'+fmt.format(total)+'</b><div class="mq-bar"><i id="mq-bi"></i></div><div class="mq-lg"><span>Principal '+pct+'%</span><span>Interest '+(100-pct)+'%</span></div></div></div>';
requestAnimationFrame(function(){requestAnimationFrame(function(){var b=$("mq-bi");if(b)b.style.width=pct+"%"})});
}
$("mq-go").onclick=calc;
["mq-price","mq-down","mq-rate","mq-term"].forEach(function(i){$(i).addEventListener("keydown",function(k){if(k.key==="Enter")calc()})});
})();

(function(){var lm=document.querySelector(".lm");if(!lm)return;var bs=lm.querySelectorAll(".lm-b button"),i=lm.querySelector(".lm-i"),m=lm.querySelector(".lm-m");
bs.forEach(function(b){b.onclick=function(){var v=b.dataset.v;bs.forEach(function(x){x.classList.toggle("on",x===b)});i.hidden=v!=="img";m.hidden=v!=="map"}})})();
