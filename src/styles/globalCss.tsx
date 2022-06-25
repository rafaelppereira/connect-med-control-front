import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body, html': {
    background: '$gray900',
    fontFamily: '$system',
    height: '100%',
    webkitFontSmoothing: 'antialised'
  },
  'input, button, select': {
    fontFamily: '$system',
  },
  'a': {
    textDecoration: 'none',
  },
  'button': {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
  },
  '::selection': {
    background: '$purple500',
    color: '$white',
  },
  '::-webkit-scrollbar': {
    width: '5px',
    height: '5px'
  },
  '::-webkit-scrollbar-thumb': {
    background: '$purple500',
    borderRadius: '10px 0 0 10px'
  }
})