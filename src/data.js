// ============================================================
//  Todo o conteúdo do site está aqui.
// ============================================================

export const profile = {
  name: 'Greg',
  role: 'Desenvolvedor Fullstack',
  photo: 'perfil.webp',
}

// texto de abertura - edite à vontade
export const intro =
  'Minha lista de produtos testados e recomendados: o que eu comprei, usei de ' +
  'verdade e sobreviveu ao teste do tempo. Cada um tem o que eu achei dele.'

// Aviso de afiliado. Conferir a redação exigida nos Termos do Programa de
// Afiliados e Criadores do ML (mercadolivre.com.br/ajuda/30228) - a obrigação
// é identificar o programa e os links patrocinados.
export const disclosure =
  'Participo do Programa de Afiliados do Mercado Livre. Os links desta página ' +
  'são patrocinados: se você comprar por eles, eu recebo uma comissão - sem ' +
  'custo adicional pra você.'

export const instagram = 'https://www.instagram.com/gabrielogregorio/'

// ------------------------------------------------------------
//  Produtos. A ordem do array é a ordem na tela.
//
//  Foto, nota e avaliações são OPCIONAIS - o card se ajusta sozinho
//  quando faltam. Pra completar um item:
//    1. salve a foto em  src/produtos/<id>.png   (o mesmo id daqui de baixo)
//    2. preencha  rating: '4,8'  e  reviews: '127 avaliações'
//  A foto se liga sozinha pelo nome do arquivo. Ver src/fotos.js.
//
//  Os textos de `why` marcados como TODO são placeholder - troque
//  pelo motivo real de você usar.
// ------------------------------------------------------------

export const products = [
  {
    id: 'flauta',
    name: 'Flauta Doce Yamaha Soprano Barroca YRS-24B',
    rating: '4,9',
    reviews: '2.266 avaliações',
    price: 'R$ 49',
    was: 'R$ 78',
    store: 'Mercado Livre',
    why: 'Estou tocando ela e gostando bastante do som e do resultado. E o preço é ótimo.',
    url: 'https://meli.la/2RBaRex',
  },
  {
    id: 'hand-grip',
    name: 'Hand Grip Master T117 Acte Sports',
    rating: '4,8',
    reviews: '127 avaliações',
    price: 'R$ 29',
    store: 'Mercado Livre',
    why: 'Uso pra treinar os dedos - tin whistle, flauta, teclado.',
    url: 'https://meli.la/1p5AwQ9',
  },
  {
    id: 'kalimba',
    name: 'Kalimba 17 Chaves',
    rating: '4,9',
    reviews: '548 avaliações',
    price: 'R$ 58',
    store: 'Mercado Livre',
    why: 'Gostei muito da sonoridade. É um belo instrumento, fácil de aprender e com um som hipnotizante.',
    url: 'https://meli.la/1phiRkb',
  },
  {
    id: 'ukulele',
    name: 'Ukulele Soprano com capa, afinador e 3 palhetas',
    rating: '4,7',
    reviews: '1.775 avaliações',
    price: 'R$ 111,24',
    was: 'R$ 135,66',
    store: 'Mercado Livre',
    why: 'Tenho dedos grandes e sofro pra tirar som limpo, mas quando sai o som é maravilhoso. Pra quem tem dedos pequenos essa versão é excelente: ótima sonoridade e um ótimo instrumento pra entrar nesse mundo.',
    url: 'https://meli.la/2eDL9DH',
  },
  {
    id: 'teclado-kobe',
    name: 'Teclado Musical Kobe KB-400 61 teclas',
    rating: '4,7',
    reviews: '270 avaliações',
    price: 'R$ 669',
    was: 'R$ 799',
    store: 'Mercado Livre',
    why: 'Me surpreendeu positivamente. Tem vários tipos de som, três níveis de sensibilidade que dão pro gasto, e o material é muito bom.',
    url: 'https://meli.la/1Zewx87',
  },
  {
    id: 'cubo',
    name: 'Cubo Mágico 3x3x3 Moyu Meilong M magnético',
    rating: '4,9',
    reviews: '4.401 avaliações',
    price: 'R$ 29,90',
    was: 'R$ 39,90',
    store: 'Mercado Livre',
    why: 'Excelente. Já resolvi mais de cem vezes, já caiu no chão várias vezes e continua parecendo novo. Desliza perfeitamente - dá gosto de resolver.',
    url: 'https://meli.la/2A5CXfG',
  },
  {
    id: 'ioio',
    name: 'Ioiô Profissional York Master eixo de madeira',
    rating: '4,8',
    reviews: '422 avaliações',
    price: 'R$ 29,63',
    was: 'R$ 32,92',
    store: 'Mercado Livre',
    why: 'Excelente: muito bem construído, resistente, bonito, fácil e nostálgico.',
    url: 'https://meli.la/1M4tWpB',
  },
  {
    id: 'controle-xbox',
    name: 'Controle sem fio Xbox Series X|S Electric Volt',
    rating: '4,8',
    reviews: '126.663 avaliações',
    price: 'R$ 450',
    store: 'Mercado Livre',
    why: 'O melhor controle que já tive. Pesadinho, mas excelente. Funciona por Bluetooth e por cabo no Windows, no Linux, em emulação e também no Android - no celular, inclusive por OTG. Ótima pegada e ótimo feedback.',
    url: 'https://meli.la/1HUk7HM',
  },
  {
    id: 'suporte-celular',
    name: 'Suporte de celular para controle de Xbox',
    rating: '4,7',
    reviews: '401 avaliações',
    price: 'R$ 42',
    store: 'Mercado Livre',
    why: 'Excelente pra jogar no celular.',
    url: 'https://meli.la/1hMnbry',
  },
  {
    id: 'volante',
    name: 'Volante Gamer V99 com force feedback',
    rating: '4,8',
    reviews: '890 avaliações',
    price: 'R$ 1.629,99',
    store: 'Mercado Livre',
    why: 'Usei por um tempo e foi muito bom - joguei muito Automobilista 2 e BeamNG.drive, e o feedback era gostoso demais. Acabei vendendo o meu por falta de espaço em casa. O ponto negativo é o suporte dos pedais, que desliza no chão e exige colocar algo atrás pra segurar. Fora isso, um excelente volante - ainda mais em promoção.',
    url: 'https://meli.la/16xLviB',
  },
  {
    id: 'soquete',
    name: 'Kit de soquete e catraca 216 peças aço Cr-V',
    rating: '4,7',
    reviews: '503 avaliações',
    price: 'R$ 363',
    was: 'R$ 580',
    store: 'Mercado Livre',
    why: 'Me surpreendeu. Peguei numa promoção com desconto: kit super completo, material de boa qualidade e extremamente útil. Já usei as diferentes ferramentas várias vezes.',
    url: 'https://meli.la/2eS4YJG',
  },
  {
    id: 'fone-p40i',
    name: 'Fone Bluetooth Anker soundcore P40i',
    rating: '4,8',
    reviews: '2.557 avaliações',
    price: 'R$ 355,49',
    was: 'R$ 624',
    store: 'Mercado Livre',
    why: 'Excelentes. Boa autonomia, dá pra localizar se sumirem, material de qualidade e som prazeroso. Não é altíssimo - tem várias proteções pra audição.',
    url: 'https://meli.la/1GcVSmW',
  },
  {
    id: 'mouse-g703',
    name: 'Mouse Gamer sem fio Logitech G703 Hero 25K',
    rating: '4,9',
    reviews: '619 avaliações',
    price: 'R$ 536',
    store: 'Mercado Livre',
    why: 'É o meu mouse atual. Excelente, tem tudo o que eu preciso e o material é ótimo.',
    url: 'https://meli.la/2GsY6mH',
  },
  {
    id: 'mic-trust',
    name: 'Microfone Trust GXT 212 condensador',
    rating: '4,5',
    reviews: '781 avaliações',
    price: 'R$ 188,95',
    was: 'R$ 198,90',
    store: 'Mercado Livre',
    why: 'Excelente. Ocupa um espaço na mesa por ter que ficar em cima dela, mas o áudio é super decente e o material é ótimo. O meu já caiu no chão de forma brusca várias vezes e sobreviveu perfeitamente.',
    url: 'https://meli.la/1VXHjEJ',
  },
  {
    id: 'smartwatch-rs4',
    name: 'Smartwatch Haylou RS4 Plus AMOLED 1.78"',
    rating: '4,7',
    reviews: '1.441 avaliações',
    price: 'R$ 166',
    store: 'Mercado Livre',
    why: 'Foi um dos primeiros que tive e fiquei vários anos com ele - nunca me deixou na mão. Hoje uso um Watch 7 da Samsung pra sincronizar meus dados com o app da Samsung, mas esse é um ótimo relógio.',
    url: 'https://meli.la/2sxoQQr',
  },
  {
    id: 'balanca',
    name: 'Balança digital de bioimpedância Relaxmedic',
    rating: '4,9',
    reviews: '34.277 avaliações',
    price: 'R$ 117,56',
    was: 'R$ 279,90',
    store: 'Mercado Livre',
    why: 'Excelente. Acompanha o progresso pelo celular, é super resistente e uso sempre.',
    url: 'https://meli.la/2PnocvQ',
  },
  {
    id: 'arco-flecha',
    name: 'Arco e flecha Vixion X6 40 lbs com acessórios',
    rating: '4,7',
    reviews: '117 avaliações',
    price: 'R$ 247,95',
    was: 'R$ 415',
    store: 'Mercado Livre',
    why: 'Excelente pra brincar em ambiente seguro e controlado. O arco é extremamente forte - ao praticar, tire qualquer pessoa do raio da frente e das laterais.',
    url: 'https://meli.la/2hJUkZw',
  },
  {
    id: 'hq-cyberpunk',
    name: 'HQ Cyberpunk 2077: Trauma Team (capa dura)',
    rating: '4,9',
    reviews: '72 avaliações',
    price: 'R$ 46,85',
    was: 'R$ 79,90',
    store: 'Mercado Livre',
    why: 'Um livro que gostei muito de ter. Ótima história, ótima arte, e fala da Trauma Team, que sempre me deu curiosidade no Cyberpunk.',
    url: 'https://meli.la/1RHyvyq',
  },
  {
    id: 'cabo-hdmi',
    name: 'Cabo HDMI 2.1 de 5m - 8K 60Hz, 4K 120Hz',
    rating: '4,7',
    reviews: '681 avaliações',
    price: 'R$ 45,49',
    was: 'R$ 49,99',
    store: 'Mercado Livre',
    why: 'Excelente. Aguenta o dia a dia até hoje, nunca deu problema nem instabilidade.',
    url: 'https://meli.la/2rpr6wx',
  },
  {
    id: 'soprador',
    name: 'Mini soprador de poeira USB',
    rating: '4,8',
    reviews: '947 avaliações',
    price: 'R$ 205,89',
    store: 'Mercado Livre',
    why: 'Excelente, uso com frequência pra limpar as coisas. Bem forte e com boa bateria.',
    url: 'https://meli.la/2hA2jdy',
  },
  {
    id: 'tampa-webcam',
    name: 'Protetor de webcam anti-espião - 10 unidades',
    rating: '4,8',
    reviews: '1.054 avaliações',
    price: 'R$ 19,14',
    was: 'R$ 21,27',
    store: 'Mercado Livre',
    why: 'Muito bom e útil. Uso bastante nos dispositivos.',
    url: 'https://meli.la/2dmRATr',
  },
]
