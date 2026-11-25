/* CONFIGURAÇÕES GERAIS
   Personalize os dados iniciais da clínica neste objeto.
   Para publicação compartilhada entre dispositivos, configure Supabase em database.js. */
window.SITE_CONFIG = {
  clinicName: "Odontologia",
  doctorName: "Dra. Ana Carolina Maciel",
  cro: "CRO-PR 32.244",
  phoneDisplay: "41 3667-2313",
  whatsapp: "554136672313",
  address: "Endereço a confirmar com a clínica",
  hours: "Consulte os horários pelo WhatsApp",
  logo: "logo-odontologia.png",
  doctorPhoto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
  heroImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1900&q=88",
  mapUrl: "",
  theme: "classic",
  productsEnabled: false,
  heroTitle: "Cuidando do seu sorriso em todas as fases da vida!",
  heroText: "Clínica geral, atendimento para adultos e crianças, implantes e próteses.",
  doctorBio: "Um atendimento acolhedor, com atenção às necessidades de cada paciente e cuidado em todas as etapas do tratamento.",
  productsTitle: "Produtos e recomendações",
  productsDescription: "Confira produtos selecionados e links úteis.",
  services: [
    {id:"s1",icon:"smile",title:"Clínica Geral",description:"Cuidados completos para sua saúde bucal."},
    {id:"s2",icon:"baby",title:"Adultos e Crianças",description:"Atendimento para toda a família."},
    {id:"s3",icon:"sparkles",title:"Implantes",description:"Conheça as opções de reabilitação oral."},
    {id:"s4",icon:"heart-pulse",title:"Próteses",description:"Soluções funcionais e personalizadas."}
  ],
  benefits: ["Atendimento personalizado","Atenção para adultos e crianças","Avaliação odontológica individualizada","Orientação em cada etapa do tratamento"],
  gallery: [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85"
  ],
  products: [],
  socials: [{name:"Instagram",url:"https://instagram.com/",icon:"instagram",active:false}],
  sections: {services:true,about:true,gallery:true,products:true,location:true,contact:true}
};