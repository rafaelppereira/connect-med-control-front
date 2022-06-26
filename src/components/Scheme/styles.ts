import { styled } from "@stitches/react";

export const SchemeContainer = styled('section', {
  width: '100%',
  height: '100%',
  maxHeight: '100vh',

  display: 'flex',

  'main': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  '.pageContent': {
    padding: '2rem 2.5rem',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 6rem)',
    overflowY: 'auto'
  }
})