import { styled } from "@stitches/react";

export const SidebarAside = styled('aside', {
  width: '20rem',
  height: '100vh',
  background: '$gray800',
  padding: '0 2rem',

  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,

  '.topside': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    padding: '1.2rem 0',

    borderBottom: '1px solid $gray500',

    'img': {
      width: '160px',
      height: 'inherit',
    }
  },

  '.menuContainer': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: '1rem',

    '.menu': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      maxHeight: '100%',
      overflowY: 'auto',

      '.reportsLink': {
        background: '$gray200',
        padding: '0.5rem',
        borderRadius: '8px',
        marginTop: '1rem',
        textAlign: 'center',
        textDecoration: 'none',
        color: '$white',
        transition: 'filter 0.2s',
        fontSize: '0.9rem',

        '&:hover': {
          filter: 'brightness(0.8)'
        }
      },

      '.itemsLink': {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2rem',
        padding: '0 1.5rem',

        'a': {
          color: '$white',
          fontSize: '1rem',
          padding: '0.4rem 0',
          transition: 'color 0.2s',

          '&:hover': {
            color: '$purple500'
          },

          '&.active': {
            color: '$purple500'
          }
        },

        '.itemsTitle': {
          margin: '2rem 0 0.4rem 0',
          fontSize: '0.7rem',
          opacity: '0.7',
          color: '$white',
          fontWeight: 200,
          marginLeft: '15px',
          position: 'relative',

          '&::before': {
            content: '',
            position: 'absolute',
            left: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '50%',
            display: 'block',

            width: '7px',
            height: '7px',
            background: '$purple500'
          }
        }
      }
    },

    '.leave': {
      marginBottom: '2rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid $gray500',

      'button': {
        background: '$purple500',
        width: '100%',
        height: '45px',
        borderRadius: '9999px',
        color: '$white',
        transition: 'filter 0.2s',

        '&:hover': {
          filter: 'brightness(0.8)'
        }
      }
    }
  }
})