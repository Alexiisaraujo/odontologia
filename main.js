/* SITE PÚBLICO
   Carrega a configuração, aplica o tema e conecta botões/elementos. */
document.addEventListener("DOMContentLoaded",()=>{
  const data=SiteDB.load();
  const $=id=>document.getElementById(id);
  const setText=(id,value)=>{if($(id))$(id).textContent=value||"";};
  const setImage=(id,url)=>{const el=$(id);if(el&&url)el.src=url;};
  const wa=(message="Olá! Gostaria de informações e horários para atendimento.")=>`https://wa.me/${String(data.whatsapp||"554136672313").replace(/\D/g,"")}?text=${encodeURIComponent(message)}`;
  applyTheme(data.theme);
  document.title=`${data.clinicName||"Odontologia"} | ${data.doctorName||""}`;
  setImage("brandLogo",data.logo);setImage("footerLogo",data.logo);setImage("doctorPhoto",data.doctorPhoto);
  $("heroBackground").style.backgroundImage=`linear-gradient(90deg,#eaf5f8 0%,rgba(234,245,248,.94) 8%,rgba(234,245,248,.28) 48%,rgba(5,43,77,.08) 100%),url("${data.heroImage}")`;
  setText("heroTitle",data.heroTitle);setText("heroText",data.heroText);setText("doctorName",data.doctorName);setText("doctorCro",data.cro);setText("doctorBio",data.doctorBio);
  setText("topPhone",data.phoneDisplay);setText("contactPhone",data.phoneDisplay);setText("footerPhone",data.phoneDisplay);setText("footerCro",data.cro);setText("clinicAddress",data.address);setText("openingHours",data.hours);
  ["navWhatsapp","heroButton","bandWhatsapp","contactWhatsapp","floatingWhatsapp"].forEach(id=>{if($(id))$(id).href=wa();});
  $("servicesGrid").innerHTML=SiteSections.services(data.services||[]);
  $("benefitsList").innerHTML=(data.benefits||[]).map(t=>`<li><i data-lucide="check-circle-2"></i>${SiteSections.escape(t)}</li>`).join("");
  $("galleryGrid").innerHTML=SiteSections.gallery(data.gallery||[]);
  if(data.productsEnabled){$("productsSection").classList.remove("is-hidden");setText("productsTitle",data.productsTitle);setText("productsDescription",data.productsDescription);$("productsGrid").innerHTML=SiteSections.products(data.products||[]);}
  const sections=data.sections||{};
  Object.entries({servicos:"services",sobre:"about",galeria:"gallery",localizacao:"location",contato:"contact"}).forEach(([id,key])=>{const el=$(id);if(el&&!sections[key])el.classList.add("is-hidden");});
  if(data.mapUrl&&/^https:\/\/(www\.)?(google\.com\/maps|maps\.app\.goo\.gl)/.test(data.mapUrl)){$("mapFrame").innerHTML=`<iframe src="${data.mapUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa da clínica"></iframe>`;$("mapsLink").href=data.mapUrl;}
  else $("mapsLink").classList.add("is-hidden");
  $("socialLinks").innerHTML=(data.socials||[]).filter(s=>s.active&&s.url).map(s=>`<a href="${SiteSections.escape(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${SiteSections.escape(s.name)}"><i data-lucide="${SiteSections.escape(s.icon||"external-link")}"></i></a>`).join("");
  $("year").textContent=new Date().getFullYear();
  const header=$("siteHeader");window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>20),{passive:true});
  $("menuToggle").addEventListener("click",()=>{const open=$("mainNav").classList.toggle("open");$("menuToggle").setAttribute("aria-expanded",String(open));});
  $("mainNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("open")));
  if("IntersectionObserver"in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));}else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
  if(window.lucide)lucide.createIcons();
});