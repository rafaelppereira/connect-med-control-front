import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '6rem',
  background: '$gray700',
  padding: '0 2.5rem',

  '.datetime': {
    color: '$white',

    display: 'flex',
    alignItems: 'center',

    'svg': {
      marginRight: '0.9rem',
      color: '$purple500'
    },

    'time': {
      fontWeight: '300',
      fontSize: '0.9rem'
    }
  },

  '.searchInput': {
    position: 'relative',

    'svg': {
      position: 'absolute',
      left: '15px',
      top: 'calc(50% - 1px)',
      transform: 'translateY(-50%)',
      color: '$gray300'
    },

    'input': {
      width: '300px',
      height: '40px',
      borderRadius: '9999px',
      border: 0,
      borderBottom: '2px solid',
      borderColor: '$gray500',
      background: '$gray500',
      paddingLeft: '2.7rem',
      outline: 'none',
      color: '$white',
      fontSize: '14px',
      fontWeight: 300,
      transition: 'border-color 0.2s',

      '&:focus': {
        borderColor: '$purple500'
      }
    }
  },

  '.profile': {
    display: 'flex',
    alignItems: 'center',

    '.notifications': {
      display: 'flex',
      alignItems: 'center',
      marginRight: '1rem',
      paddingRight: '2rem',


      borderRight: '1px solid $gray500',

      'button': {
        lineHeight: 0,
        padding: '1rem',
        transition: 'opacity 0.2s',

        'svg': {
          color: '$white'
        },

        '&:hover': {
          opacity: 0.8
        }
      }
    },

    '.user': {
      display: 'flex',
      alignItems: 'center',

      '.avatar': {
        background: '$purple500',
        width: '55px',
        height: '55px',
        borderRadius: '50%',
        fontSize: '1.5rem',
        color: '$white',
        border: '2px solid $purple600',
  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      'img': {
        background: '$purple500',
        width: '55px',
        height: '55px',
        borderRadius: '50%',
        border: '2px solid $purple600',
      },
  
      '.userInfo': {
        display: 'flex',
        flexDirection: 'column',
  
        textAlign: 'left',
        color: '$white',
        marginLeft: '1.2rem',
        lineHeight: '133.5%',
  
        'strong': {
          fontWeight: 500,
        },
  
        'span': {
          fontWeight: 300,
          fontSize: '0.9rem',
          opacity: 0.8
        }
      }
    },

  }
})