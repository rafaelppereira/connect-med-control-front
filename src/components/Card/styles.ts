import { styled } from "@stitches/react";

export const CardContainer = styled('div', {
  background: '$gray800',
  flex: 1,
  padding: '2rem 2.2rem',
  borderRadius: '8px',

  '.title': {
    color: '$white',

    'h1': {
      position: 'relative',
      fontWeight: 500,

      '&::before': {
        content: '',
        position: 'absolute',
        left: '-18px',
        top: '50%',
        transform: 'translateY(-50%)',

        width: '7px',
        height: '7px',
        borderRadius: '50%',

        background: '$purple500',
      }
    },

    'p': {
      fontSize: '0.9rem',
      fontWeight: 200,
      opacity: 0.7
    }
  },

  'main': {
    marginTop: '2rem'
  }
})