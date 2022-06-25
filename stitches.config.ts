import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'Poppins',
      rajdhani: 'Rajdhani' 
    },
    colors: {
      white: '#ffffff',

      purple500: '#8B5CF6', // Primary color
      purple600: '#7348D4', // Primary color hover

      gray200: '#494949',
      gray300: '#5C5C5C',
      gray400: '#464647',
      gray500: '#383838', 
      gray600: '#2D2D2D', 
      gray700: '#242424', // Header color
      gray800: '#262628', // Sidebar color
      gray900: '#1E1E20', // Background color

      danger500: '#FF614B',
    },
  },
});