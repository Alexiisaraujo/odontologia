/* TEMAS
   Cada tema define tokens CSS. Adicione temas aqui e no seletor do admin. */
window.SiteThemes = {
  classic:{primary:"#073b67",secondary:"#00a6ad",accent:"#0baa63",paper:"#ffffff",soft:"#f3f8fa",ink:"#18334d"},
  premium:{primary:"#102d48",secondary:"#b89b66",accent:"#168b70",paper:"#ffffff",soft:"#f7f5f0",ink:"#263b4d"},
  minimal:{primary:"#243746",secondary:"#70aeb0",accent:"#168b70",paper:"#ffffff",soft:"#f5f7f7",ink:"#344650"},
  luxury:{primary:"#142b3c",secondary:"#c5a46d",accent:"#168b70",paper:"#fbfaf8",soft:"#f1eee8",ink:"#263440"},
  soft:{primary:"#31536a",secondary:"#83c7c3",accent:"#15986d",paper:"#ffffff",soft:"#f3fafa",ink:"#425968"},
  corporate:{primary:"#123f65",secondary:"#278da3",accent:"#138b63",paper:"#ffffff",soft:"#f0f5f8",ink:"#27465e"},
  natural:{primary:"#285447",secondary:"#8ab6a0",accent:"#438b68",paper:"#fffefa",soft:"#f2f6ef",ink:"#3e5549"},
  modern:{primary:"#073b67",secondary:"#13b6b0",accent:"#0baa63",paper:"#ffffff",soft:"#eef8f8",ink:"#18334d"}
};
window.applyTheme = function(name){
  const theme=window.SiteThemes[name]||window.SiteThemes.classic;
  const root=document.documentElement;
  root.style.setProperty("--primary",theme.primary);
  root.style.setProperty("--secondary",theme.secondary);
  root.style.setProperty("--accent",theme.accent);
  root.style.setProperty("--paper",theme.paper);
  root.style.setProperty("--soft",theme.soft);
  root.style.setProperty("--ink",theme.ink);
};