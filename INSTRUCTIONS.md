# Let's Slider - Instruções de Uso

## Instalação

```bash
cd lets-slider
npm install
npm run dev
```

## Navegação

- **Seta Direita** ou **Espaço**: Próximo slide
- **Seta Esquerda**: Slide anterior
- **Home**: Primeiro slide
- **End**: Último slide

## Customização

### Cores
Edite o arquivo `src/constants.js` para alterar as cores:

```javascript
export const COLORS = {
  background: '#0b035d', // Cor de fundo
  text: '#ffffff',       // Cor do texto
};
```

### Imagens
Configure os caminhos das imagens no `src/constants.js`:

```javascript
export const IMAGES = {
  logoCenter: '/logo-edp-interligados.png',  // Logo grande (slide inicial)
  logoTopRight: '/logo-edp.png',              // Logo pequeno (demais slides)
};
```

As imagens devem estar na pasta `public/`.

### Layout
Ajuste o tamanho e posição do logo pequeno:

```javascript
export const LAYOUT = {
  logoTopRightSize: '200px',   // Tamanho do logo
  logoTopRightMargin: '40px',  // Margem do logo
};
```

### Slides
Adicione ou edite slides no array `SLIDES` em `src/constants.js`:

```javascript
export const SLIDES = [
  {
    type: 'title',      // Slide com logo centralizado
    content: '',
  },
  {
    type: 'content',    // Slide com conteúdo
    title: 'Título do Slide',
  },
  // Adicione mais slides aqui...
];
```

## Modo Apresentação

Para apresentar em tela cheia:
1. Pressione **F11** no navegador (Chrome/Firefox)
2. Ou use o modo de apresentação do navegador

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.
