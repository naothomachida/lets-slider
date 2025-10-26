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

// Dados do slide de título (primeiro slide)
export const TITLE_SLIDE_DATA = {
  lessonNumber: 'Lição 3',
  mainTitle: 'IMPACTE POSITIVAMENTE',
  subtitle: 'Unidade 1 - Profetas menores',
  teachers: 'Naotho & Suelen',
};

// Dados dos slides
export const SLIDES = [
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
    bulletPoints: [
      'Ganância',
      'Injustiça e opressão',
      'Imoralidade, idolatria e folia',
      'Ignoravam a Deus',
      'Desonestidade',
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
];
