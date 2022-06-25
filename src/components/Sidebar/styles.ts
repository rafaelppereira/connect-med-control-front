import { styled } from "@stitches/react";

export const SidebarAside = styled('aside', {
  width: '20rem',
  height: '100vh',
  background: '$gray800',
  padding: '0 2rem',

  display: 'flex',
  flexDirection: 'column',

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