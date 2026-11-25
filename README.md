# Site odontológico — pacote pronto para Git

Todos os arquivos estão na raiz do projeto para facilitar o envio pelo celular.

## Arquivos principais

- `index.html`: site público.
- `admin.html`: painel administrativo.
- `style.css`: estilos do site.
- `admin.css`: estilos do painel.
- `main.js`: renderização e interações públicas.
- `admin.js`: formulários e ferramentas administrativas.
- `config.js`: dados iniciais da clínica.
- `database.js`: camada de persistência local de demonstração.
- `sections.js`: renderizadores de serviços, galeria e produtos.
- `themes.js`: temas visuais.
- `media.js`: validação e previsualização de URLs de imagens.
- `schema.sql`: esquema inicial para Supabase.
- `logo-odontologia.png`: logotipo incluido.

## Abrir localmente

Como há JavaScript que utiliza recursos do navegador, a forma recomendada é servir os arquivos com um servidor local ou hospedá-los em GitHub Pages, Netlify ou Vercel. Para uma prévia simples, abra `index.html` no navegador; alguns navegadores restringem recursos em `file://`.

## Acesso ao painel

Abra `admin.html`. Esta versão é uma demonstração administrativa sem autenticação de servidor. Não publique o painel como ferramenta de produção com dados sensíveis antes de implementar autenticação real.

## Como editar imagens por URL

1. Abra `admin.html`.
2. Entre em “Imagens e galeria”.
3. Cole uma URL direta de imagem.
4. Clique em “Verificar imagem”.
5. Salve as alterações.

Uma página de resultados do Google Imagens não é uma URL direta. Use o endereço do arquivo de imagem hospedado por um provedor que permita incorporação externa. Respeite direitos autorais e termos do provedor. Imagens externas podem deixar de funcionar ou bloquear hotlinking.

## Persistência: limitação importante desta versão

Por padrão, o painel salva dados no `localStorage` do navegador. Isso é útil para prototipagem e demonstração, mas:
- os dados ficam apenas naquele navegador/dispositivo;
- visitantes de outros dispositivos não recebem as alterações;
- limpar dados do navegador pode apagar as alterações;
- não existe autenticação real no painel.

Para produção multiusuário, conecte Supabase:
1. Crie um projeto Supabase.
2. Execute `schema.sql` no SQL Editor.
3. Configure autenticação e perfis de administradores.
4. Crie políticas RLS restritas por clínica/tenant.
5. Integre o SDK oficial e substitua a persistência local em `database.js`.
6. Não exponha a chave `service_role` no frontend. Use somente a chave pública anon/publishable com RLS corretamente configurada.

O SQL incluído é um ponto de partida e ainda precisa de políticas de autorização específicas antes de receber dados reais.

## Logotipo

O site carrega `logo-odontologia.png` a partir da raiz. Para trocar, substitua o arquivo mantendo exatamente esse nome, ou altere o campo “URL do logotipo” no painel.

## Publicar pelo celular com Git

1. Descompacte o ZIP.
2. Selecione todos os arquivos que estão dentro dele.
3. Envie os arquivos diretamente para a raiz do repositório GitHub.
4. Não envie uma pasta externa envolvendo os arquivos.
5. Ative GitHub Pages nas configurações do repositório, ou conecte o repositório ao Netlify/Vercel.

O `index.html` precisa ficar na raiz publicada.

## Antes de usar com a clínica

Confirme com a profissional todos os dados, endereço, horários, CRO, serviços, imagens e textos. A fotografia da profissional e as imagens de ambientes são imagens de demonstração e devem ser substituídas por imagens autorizadas da clínica. Não publique depoimentos fictícios, informações clínicas não verificadas ou alegações de resultados garantidos.

Revise também as normas de publicidade odontológica aplicáveis no Brasil e a LGPD antes de coletar dados de pacientes.
