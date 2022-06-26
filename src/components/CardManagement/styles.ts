import { styled } from "@stitches/react";

export const CardManagementContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '250px',
  background: '$gray900',
  borderRadius: '8px',
  overflow: 'hidden',

  '.topside': {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem 0',
    
    'span': {
      color: '$white',
      fontSize: '0.8rem',
      fontWeight: 300,
    },
  },

  'img': {
    width: '100%',
    maxHeight: '170px',
    objectFit: 'cover',
    borderRadius: '15px 15px 0 0',
  },

  '.bottomside': {
    padding: '1rem 1.3rem',
    lineHeight: '150%',

    'span': {
      fontSize: '0.7rem',
      color: '$white',
      fontWeight: 200,
      opacity:0.7 
    },

    'h1': {
      color: '$white',
      fontSize: '1.2rem',
      fontWeight: 400
    },

    'strong': {
      color: '$danger500',
      fontSize: '0.7rem',
      fontWeight: 400,

      '&.active': {
        color: '$purple500'
      }
    }
  }
})