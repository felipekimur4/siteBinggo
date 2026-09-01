# Binggo Bebidas — site

Estrutura:
- index.html
- style.css
- script.js

## Publicar no Cloudflare Pages pelo GitHub

1. Crie um repositório novo no GitHub, por exemplo `binggo-site`.
2. Envie os três arquivos para a raiz do repositório.
3. No Cloudflare: Workers & Pages → Create application → Pages → Import existing Git repository.
4. Se for solicitado um framework, escolha "None".
5. Build command: deixe vazio.
6. Output directory: deixe vazio ou use `/`.
7. Publique.
8. Depois, em Domains/Custom domains do novo projeto, adicione:
   `binggobebidas.com.br`
   `www.binggobebidas.com.br`

## Antes de publicar
- Trocar o link do WhatsApp no `index.html`.
- Trocar o e-mail se necessário.
- Substituir os elementos visuais de demonstração pelos produtos/fotos reais.
- Ajustar textos e produtos conforme a linha comercial da Binggo.
