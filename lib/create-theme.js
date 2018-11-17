import color from 'color';

const createTheme = firebaseTheme => ({
  colors: {
    primary: firebaseTheme.primaryColor,
    primaryTransparent: color(firebaseTheme.primaryColor)
      .alpha(0.25)
      .rgb()
      .string(),
    background: firebaseTheme.backgroundColor,
    backgroundTransparent: color(firebaseTheme.backgroundColor)
      .alpha(0.8)
      .rgb()
      .string(),
    foreground: firebaseTheme.foregroundColor,
    secondary: firebaseTheme.secondaryColor,
  },
  backgroundImage: firebaseTheme.backgroundImage,
  font: {
    family: '"Open Sans", sans-serif',
    rootSize: '16px',
    lineHeight: 1.5,
    weights: {
      light: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
      xtrabold: 800,
    },
  },
  scale: {
    huge: 6.854,
    biggest: 4.236,
    bigger: 2.618,
    big: 1.618,
    normal: 1,
    small: 0.618,
    smaller: 0.382,
    smallest: 0.236,
  },
  transition: {
    duration: '.3s',
    easing: 'ease-in-out',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '769px',
    desktop: '1024px',
    widescreen: '1216px',
    fullhd: '1408px',
  },
});

export default createTheme;
