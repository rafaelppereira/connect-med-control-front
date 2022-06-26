import { styled } from "../../../stitches.config";

export const FormData = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  'input, select': {
    height: '45px',
    padding: '0 1rem',
    background: '$gray500',
    borderRadius: '8px',
    color: '$white',
    outline: 'none',
    border: '1px solid ',
    borderColor: '$gray500',
    transition: 'border-color 0.2s',

    '&:focus': {
      borderColor: '$purple500'
    }
  },

  'button': {
    background: '$purple500',
    height: '45px',
    borderRadius: '8px',
    marginTop: '1.5rem',
    color: '$white',
    transition: 'filter 0.2s',

    '&:hover': {
      filter: 'brightness(0.8)'
    }
  }
})