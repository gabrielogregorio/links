# link-bio

Página de links pessoal em **React + Vite + Motion**. Tema terminal, mobile-first:
cabeçalho, texto de abertura e 21 recomendações de compra num grid.

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/
npm run preview    # serve o dist/
```

## Publicar no GitHub Pages

GitHub Actions já configurado:

```bash
git init && git add . && git commit -m "link-bio"
git branch -M main
git remote add origin git@github.com:USUARIO/link-bio.git
git push -u origin main
```

Depois: **Settings → Pages → Source: GitHub Actions**. Cada push na `main`
republica. `vite.config.js` usa `base: './'`, então funciona tanto em
`usuario.github.io/link-bio/` quanto na raiz.

## Editar

**Tudo em `src/data.js`.** Nenhum componente precisa ser tocado pra mudar conteúdo.

```js
// produto — o grid é de 2 colunas; um 3º item cria uma linha nova
{ id: 'x', name: 'Nome', variant: 'Cor cinza', rating: '4,8',
  reviews: '127 avaliações', store: 'Mercado Livre',
  why: 'Por que eu uso.', photo: 'produtos/foto.png', url: 'https://...' }
```

Fotos de produto vão em `public/produtos/` e o `photo` é o caminho **sem barra
inicial** (`produtos/foto.png`), pra funcionar em subdiretório do Pages.

## Decisões de design

Tema terminal, seguindo o guia `codex/workspace/GUIA-UI-NAO-PARECER-FEITA-POR-IA.md`:

- **Paleta própria em OKLCH.** Fundo é carvão levemente esverdeado
  (`oklch(0.168 0.010 155)`), **não preto puro** — é o que separa terminal de
  "fundo #000 de template". Um único accent: verde fósforo.
- **JetBrains Mono** servida junto do site, com ligaduras desligadas.
- **Radius 0** em tudo. Bordas de 1px, sem sombra difusa.
- **Scanline em micro-dose** (`repeating-linear-gradient` a 1.6% de opacidade)
  em vez de fundo chapado. Sutil de perto, some de longe.
- Toques de shell onde ajudam a ler, não como fantasia: prompt no topo com
  cursor piscando, `~/` antes do nome, `#` no comentário, `$` no botão,
  `./` nos links do rodapé.
- Foto do produto sobre painel claro com `object-fit: contain` — são recortes
  quase quadrados, `cover` decepava o produto.

## Grid

Duas colunas fixas, já no celular (`repeat(2, minmax(0,1fr))`) — a 390px cada
card fica com 172px. Um terceiro produto cria uma segunda linha sozinho.

Nos cards estreitos a contagem de avaliações não cabe ao lado da nota, então ela
vai pra própria linha via `flex-basis:100%`.

## Adicionar um produto

Os 21 estão completos (foto, nota, avaliações, preço e texto). Pra incluir mais um:

1. adicione o objeto em `products` no `src/data.js` com um `id` novo;
2. salve a foto em `src/produtos/<id>.png` — ela se liga sozinha pelo nome do
   arquivo (`src/fotos.js` faz um glob). Aceita `.png`, `.jpg` e `.webp`;
3. preencha `rating`, `reviews`, `price` (e `was`, se tiver preço cheio) e `why`.

```bash
npm run fotos    # lista quem está sem foto e o nome de arquivo esperado
```

O card se ajusta sozinho quando falta algo: sem foto mostra "sem foto", sem nota
ou preço a linha some, e `why` começando com "TODO" não é renderizado.

O Mercado Livre bloqueia acesso automatizado (headless cai em login, curl dá 302,
a API pública e o WebFetch devolvem 403), então esses dados entram na mão.

## Antes de divulgar

- **Confirme a redação exigida do aviso de afiliado.** O texto em `disclosure`
  (`src/data.js`) identifica o programa e os links patrocinados, que é o que a
  obrigação pede, mas eu não consegui ler os Termos do Programa de Afiliados e
  Criadores (`mercadolivre.com.br/ajuda/30228` bloqueia acesso automatizado).
  Cheque no painel de afiliados se há uma redação literal exigida.
- Não remova o aviso: os links `meli.la` carregam `matt_word=gabrielgregorio1`,
  e CONAR e CDC esperam a divulgação.
- **Preços são um retrato de 19/07/2026** e mudam sozinhos no ML, inclusive as
  promoções. Reveja de vez em quando ou tire o campo `price`.
- Atualize as tags `og:` no `index.html` com a URL real depois do primeiro deploy.
