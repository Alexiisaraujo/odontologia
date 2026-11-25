/* CAMADA DE DADOS
   Esta versão funciona imediatamente com localStorage no navegador.
   Para sincronização real entre visitantes e dispositivos, configure Supabase:
   1) Inclua o SDK oficial do Supabase no index.html e admin.html.
   2) Defina SUPABASE_URL e SUPABASE_ANON_KEY em config.js.
   3) Execute schema.sql no painel Supabase.
   Nunca coloque a service_role key no navegador. */
window.SiteDB = (() => {
  const KEY = "odontologia_site_config_v1";
  const clone = value => JSON.parse(JSON.stringify(value));
  function load(){
    try { const saved = localStorage.getItem(KEY); return saved ? {...clone(window.SITE_CONFIG), ...JSON.parse(saved)} : clone(window.SITE_CONFIG); }
    catch(error){ console.warn("Não foi possível carregar as configurações locais.", error); return clone(window.SITE_CONFIG); }
  }
  function save(data){
    try { localStorage.setItem(KEY, JSON.stringify(data)); return {ok:true}; }
    catch(error){ console.error(error); return {ok:false,error:"Não foi possível salvar no navegador."}; }
  }
  function reset(){ localStorage.removeItem(KEY); return clone(window.SITE_CONFIG); }
  function exportData(data){ return JSON.stringify(data,null,2); }
  return {load,save,reset,exportData};
})();