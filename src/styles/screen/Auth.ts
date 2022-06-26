import { styled } from "@stitches/react";

export const AuthContainer = styled('section', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  backgroundImage: 'url("/assets/auth-background.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  '@media (max-width: 850px)': {
    backgroundPosition: 'left',
    padding: '0 1rem'
  },

  'img': {
    width: '14rem',
    marginBottom: '2rem'
  },

  '.copyright': {
    marginTop: '0.5rem',
    fontSize: '0.8rem',
    color: '$gray300',
  }
});

export const Box = styled('div', {
  background: '$gray700',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '500px',
  minHeight: '400px',
  padding: '2rem',
  boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.02)',

  'h2': {
    color: '$white',
    fontWeight: '$regular',
    position: 'relative',

    '&::before': {
      content: '',
      width: '1.3rem',
      height: '2px',
      background: '$green500',
      display: 'flex',
      position: 'absolute',
      left: '-2rem',
      top: '50%',
      borderRadius: '0 2rem 2rem 0'
    }
  },

  'p': {
    color: '$white',
    fontWeight: '$light',
    opacity: 0.6
  },

  '@media (max-width: 500px)': {
    'h2': {
      fontSize: '1.3rem',
    },

    'p': {
      fontSize: '0.9rem',
    }
  }
});

export const FormInput = styled('form', {
  marginTop: '3.125rem',
  
  '.connected': {
    marginTop: '1.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'label': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',

      'input[type="checkbox"]': {
        '&:checked ~ .checkbox': {
          background: '$purple500',

          'svg': {
            display: 'block',
          }
        }
      },

      '.checkbox': {
        display: 'flex',
        width: '14px',
        height: '14px',
        background: 'transparent',
        border: '2px solid $purple500',
        borderRadius: '2px',

        'svg': {
          display: 'none',
        }
      },

      'span': {
        color: '$white',
        fontSize: '0.8rem',
      }
    },

    'a': {
      fontSize: '0.7rem',
      textUnderlineOffset: '0.2rem',
      color: '$purple500',
      transition: 'color 0.2s',

      '&:hover': {
        color: '$purple600'
      }
    },

    '@media (max-width: 500px)': {
      flexDirection: 'column',
      gap: '1rem'
    }
  }
});

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  '.wrapper': {
    position: 'relative',

    'svg': {
      position: 'absolute',
      left: '0.8rem',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },

  'input': {
    width: '100%',
    height: 'calc(2.8rem + 2px)',
    paddingLeft: '2.6rem',
    fontSize: '16px',

    background: '$gray600',
    border: '2px solid $gray600',
    borderRadius: '8px',
    outline: 'transparent',
    transition: 'border-bottom 0.2s',
    color: '$white',

    '&:focus': {
      borderBottom: '2px solid $purple500'
    }
  }
});

export const SignInButton = styled('button', {
  marginTop: '3.125rem',
  width: '100%',
  height: '2.8rem',
  color: '$white',
  background: 'linear-gradient(90.89deg, $purple500 -2.32%, $purple600 101.71%)',
  border: 0,
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: '$light',
  cursor: 'pointer',
  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  }
})