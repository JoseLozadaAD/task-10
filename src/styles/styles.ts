import { darken } from '@mui/material';

export const calcStyle = {
  borderRadius: '10px',
  padding: '1rem',
};

export const calcInputStyle = {
  backgroundColor: '#273a2d',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: 'inset 0 0 2rem rgba(0, 0, 0, 0.5)',
  input: {
    fontSize: '3rem',
    textAlign: 'right',
    border: 'none',
    color: '#fff',
  },
};

export const calcBodyStyle = {
  boxShadow: 'inset 0 0 2rem rgba(0, 0, 0, 0.5)',
  backgroundColor: '#273a2d',
  borderRadius: '10px',
  marginTop: 4,
};

export const buttonStyle = (color: string) => ({
  padding: '1rem',
  backgroundColor: color,
  color: 'black',
  fontSize: '1.5rem',
  '&:hover': {
    backgroundColor: darken(color, 0.2),
  },
});
