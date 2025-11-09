// Configurações de cores
export const COLORS = {
  background: '#0b035d',
  text: '#ffffff',
};

// Configurações de imagens
export const IMAGES = {
  logoCenter: '/logo-edp-interligados.png', // Logo grande centralizada (Escola da Palavra)
  logoTopLeft: '/logo-advec+inteligados.png', // Logo canto superior esquerdo
  logoTopRight: '/logo-edp.png', // Logo canto superior direito
};

// Configurações de layout
export const LAYOUT = {
  logoTopRightSize: '120px', // Tamanho do logo EDP
  logoTopRightMargin: '40px', // Margem do logo pequeno
  logoTopLeftSize: '200px', // Tamanho do logo ADVEC
  logoTopLeftMargin: '40px', // Margem do logo superior esquerdo
  teacherNameFontSize: '1.8rem', // Tamanho da fonte dos nomes dos professores
  bottomRowDistance: '60px', // Distância da linha inferior ao fundo da tela
};

// Configurações de animação
export const ANIMATION = {
  itemDelay: 150, // Delay entre cada item em milissegundos
  itemDuration: 400, // Duração da animação de cada item em milissegundos
  slideDistance: 30, // Distância do movimento em pixels
};

// Catálogo de aulas disponíveis
export const LESSONS_CATALOG = [
  {
    id: 'interligados-licao3-4tri2025',
    category: 'Interligados',
    title: 'Lição 3',
    subtitle: 'Impacte Positivamente',
    quarter: '4º Trimestre 2025',
    slideCount: 11,
    titleSlideData: {
      lessonNumber: 'Lição 3',
      mainTitle: 'IMPACTE POSITIVAMENTE',
      subtitle: 'Unidade 1 - Profetas menores',
      teachers: 'Prof. Renan e Prof. Naotho',
    },
  },
  {
    id: 'interligados-licao5-4tri2025',
    category: 'Interligados',
    title: 'Lição 5',
    subtitle: 'Face a Face',
    quarter: '4º Trimestre 2025',
    slideCount: 12,
    titleSlideData: {
      lessonNumber: 'Lição 5',
      mainTitle: 'FACE A FACE',
      subtitle: 'Unidade 2 - Evangelho de João (Cap. 1-3)',
      teachers: 'Renan & Naotho',
    },
  },
];

// Dados do slide de título (primeiro slide) - mantido para compatibilidade
export const TITLE_SLIDE_DATA = LESSONS_CATALOG[0].titleSlideData;

// Dados dos slides por aula
export const LESSONS_SLIDES = {
  'interligados-licao3-4tri2025': [
  {
    type: 'title',
    content: '',
  },
  {
    type: 'content',
    title: 'PROFETA AMÓS',
    subtitle: 'O Profeta da Justiça',
    bulletPoints: [
      'Do deserto de Tecoa ao coração de Israel',
      'Século VIII a.C.',
    ],
  },
  {
    type: 'content',
    title: 'Quem foi Amós?',
    subtitle: 'Origens Humildes',
    bulletPoints: [
      'Pastor de ovelhas de Tecoa, no deserto de Judá',
      'Também cultivador de sicômoros',
      'Chamado por Deus durante o reinado de Jeroboão II',
    ],
  },
  {
    type: 'content',
    title: 'Missão Profética',
    bulletPoints: [
      'Profetizou no Reino do Norte (Israel) por volta de 760-750 a.C.',
      'Não era profeta profissional nem filho de profeta',
      'Confrontou corajosamente a elite corrupta',
    ],
  },
  {
    type: 'content',
    quote: 'Não sou profeta, nem discípulo de profeta, mas boieiro e cultivador de sicômoros',
    quoteSource: 'Amós 7:14',
  },
  {
    type: 'content',
    title: 'As Cinco Visões Proféticas',
    visions: [
      { number: 1, title: 'Gafanhotos', description: 'Praga devoradora simbolizando destruição' },
      { number: 2, title: 'Fogo Devorador', description: 'Juízo divino consumindo a terra' },
      { number: 3, title: 'Prumo de Pedreiro', description: 'Medição da justiça do povo' },
      { number: 4, title: 'Cesto de Frutas', description: 'O fim maduro chegou para Israel' },
      { number: 5, title: 'Altar Destruído', description: 'Ninguém escapará do juízo' },
    ],
    visionNote: 'Cada visão intensifica a mensagem de julgamento iminente',
  },
  {
    type: 'content',
    title: 'Portais de Notícias',
    phoneMockups: [
      { name: 'CNN', color: '#CC0000' },
      { name: 'G1', color: '#0669DE' },
      { name: 'Folha de SP', color: '#0051A3' },
      { name: 'Estadão', color: '#003087' },
      { name: 'BBC', color: '#BB1919' },
      { name: 'UOL', color: '#F27405' },
      { name: 'Sorocabanices', color: '#76c442' },
    ],
  },
  {
    type: 'timer',
    title: 'Timer',
    duration: 180, // 3 minutos em segundos
  },
  {
    type: 'content',
    title: 'Os pecados deles mesmo',
    sinCards: [
      { title: 'Ganância', icon: '💰' },
      { title: 'Injustiça e opressão', icon: '⚖️' },
      { title: 'Imoralidade, idolatria e folia', icon: '🍷' },
      { title: 'Ignoravam a Deus', icon: '🚫' },
      { title: 'Desonestidade', icon: '🤥' },
    ],
  },
  {
    type: 'content',
    title: 'Conclusão',
    subtitle: 'Impacte Positivamente',
    bulletPoints: [
      'A mensagem de Amós permanece relevante hoje',
      'Somos chamados à justiça e retidão',
      'Deus valoriza a obediência acima dos rituais',
    ],
  },
  {
    type: 'content',
    title: 'Obrigado!',
    subtitle: 'Que Deus nos abençoe',
  },
  ],
  'interligados-licao5-4tri2025': [
    {
      type: 'title',
      content: '',
    },
    {
      type: 'content',
      title: 'O VERBO SE FEZ CARNE',
      subtitle: 'João 1:1-18',
      bulletPoints: [
        'No princípio era o Verbo, e o Verbo estava com Deus',
        'E o Verbo era Deus',
        'E o Verbo se fez carne e habitou entre nós',
      ],
    },
    {
      type: 'content',
      title: 'Encontros que Transformam',
      subtitle: 'Face a Face com Jesus',
      bulletPoints: [
        'João Batista aponta para o Cordeiro de Deus (João 1:29)',
        'Os primeiros discípulos: André, Pedro, Filipe e Natanael',
        'Jesus vê além das aparências - "Você me verá coisas maiores"',
      ],
    },
    {
      type: 'content',
      quote: 'Eis o Cordeiro de Deus, que tira o pecado do mundo!',
      quoteSource: 'João 1:29',
    },
    {
      type: 'content',
      title: 'As Bodas de Caná',
      subtitle: 'João 2:1-11 - O Primeiro Sinal',
      bulletPoints: [
        'Jesus transforma água em vinho',
        'Manifestou a sua glória',
        'Os discípulos creram nEle',
      ],
    },
    {
      type: 'content',
      title: 'A Purificação do Templo',
      subtitle: 'João 2:13-25',
      bulletPoints: [
        'Jesus expulsa os vendedores do templo',
        '"Não façam da casa de meu Pai casa de negócio"',
        'Zelo pela casa de Deus',
      ],
    },
    {
      type: 'content',
      title: 'Nicodemos - Um Encontro Noturno',
      subtitle: 'João 3:1-21',
      bulletPoints: [
        'Fariseu e membro do Sinédrio',
        'Veio à noite para conversar com Jesus',
        'Buscava respostas sinceras',
      ],
    },
    {
      type: 'content',
      title: 'Nascer de Novo',
      quote: 'Em verdade, em verdade te digo que aquele que não nascer de novo não pode ver o Reino de Deus',
      quoteSource: 'João 3:3',
    },
    {
      type: 'content',
      title: 'O Amor de Deus',
      quote: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna',
      quoteSource: 'João 3:16',
    },
    {
      type: 'timer',
      title: 'Reflexão em Grupo',
      duration: 300,
    },
    {
      type: 'content',
      title: 'Aplicação para Hoje',
      subtitle: 'Face a Face com Cristo',
      bulletPoints: [
        'Jesus nos convida a um encontro pessoal',
        'Precisamos nascer de novo pelo Espírito',
        'O amor de Deus é demonstrado na cruz',
        'Somos chamados a crer e viver esta fé',
      ],
    },
    {
      type: 'content',
      title: 'Que Deus nos abençoe!',
      subtitle: 'Próxima aula: continuaremos em João',
    },
  ],
};

// Dados dos slides - mantido para compatibilidade
export const SLIDES = LESSONS_SLIDES['interligados-licao3-4tri2025'];
