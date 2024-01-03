interface ThemeInterface {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    orange: string;
    dark: string;
    light_blue: string;
    red: string;
    black: string;
  };

  font_sizes: {
    very_small: string;
    small: string;
    medium: string;
    large: string;
    xl: string;
    xxl: string;
    xxxl: string;
    xxxxl: string;
  };

  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  numBreakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

export const theme: ThemeInterface = {
  colors: {
    primary: '#010235',
    secondary: '#F5F5F5',
    white: '#ffffff',
    orange: '#F07030',
    dark: '#0B1125',
    light_blue: '#395AC4',
    red: '#D40C0C',
    black: '#000000',
  },

  font_sizes: {
    very_small: '1rem',
    small: '1.2rem',
    medium: '1.4rem',
    large: '1.6rem',
    xl: '2rem',
    xxl: '2.4rem',
    xxxl: '3.2rem',
    xxxxl: '4.8rem',
  },

  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
  },

  numBreakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1280,
  },
};
