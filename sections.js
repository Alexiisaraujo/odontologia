/* RENDERIZAÇÃO DE SEÇÕES DINÂMICAS
   Cada renderizador transforma os dados do administrador em HTML seguro.
   Para adicionar um novo tipo de seção, crie um renderizador nesta camada
   e conecte-o ao editor em admin.js. */
window.SiteSections = {
  escape(value=""){return String(value).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));},
  services(items=[]){
    return items.map(item=>`<article class="service-card"><div class="service-icon"><i data-lucide="${this.escape(item.icon||"circle")}"></i></div><h3>${this.escape(item.title)}</h3><p>${this.escape(item.description)}</p></article>`).join("");
  },
  gallery(items=[]){
    return items.filter(Boolean).map((url,i)=>`<div class="gallery-item"><img src="${this.escape(url)}" alt="Imagem da clínica ${i+1}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`).join("");
  },
  products(items=[]){
    return items.filter(p=>p.active!==false).map(p=>`<article class="product-card"><img src="${this.escape(p.image||"")}" alt="${this.escape(p.name)}" loading="lazy" onerror="this.style.display='none'"><div class="product-info"><h3>${this.escape(p.name)}</h3><p>${this.escape(p.description||"")}</p>${p.price?`<div class="product-price">${this.escape(p.price)}</div>`:""}<a class="btn btn-primary" href="${this.escape(p.url||"#")}" target="_blank" rel="noopener noreferrer">${this.escape(p.button||"Ver produto")}</a></div></article>`).join("");
  }
};