// Liga foto ↔ produto pelo NOME DO ARQUIVO.
//
// Pra dar foto a um produto, basta salvar a imagem em `src/produtos/` com o
// mesmo `id` do produto em data.js - ex.: `src/produtos/kalimba.png`.
// Não precisa editar mais nada. Aceita .png, .jpg, .jpeg e .webp.
//
// O Vite processa e versiona essas imagens no build (o que não acontece com
// as de `public/`), então cache novo a cada troca de foto.

const arquivos = import.meta.glob('./produtos/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

const porId = {}
for (const [caminho, url] of Object.entries(arquivos)) {
  const id = caminho.split('/').pop().replace(/\.(png|jpe?g|webp)$/i, '')
  porId[id] = url
}

export const fotoDe = (id) => porId[id] ?? null
