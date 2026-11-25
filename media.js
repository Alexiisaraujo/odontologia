/* GESTOR DE MÍDIA POR URL
   Aceita links diretos de imagens. Um link de resultados do Google Imagens
   não é necessariamente um arquivo de imagem e pode não ser exibido. */
window.MediaTools = {
  isHttpUrl(value){try{const u=new URL(value);return u.protocol==="https:"||u.protocol==="http:";}catch{return false;}},
  preview(url,callback){
    if(!this.isHttpUrl(url)){callback(false,"Informe uma URL http ou https válida.");return;}
    const image=new Image(); image.onload=()=>callback(true,"Imagem carregada."); image.onerror=()=>callback(false,"Não foi possível carregar. Use um link direto e permitido pelo servidor.");
    image.referrerPolicy="no-referrer"; image.src=url;
  }
};