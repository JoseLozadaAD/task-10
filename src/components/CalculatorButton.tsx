import { Button, Grid } from '@mui/material';

import type { CalculatorButtonInterface } from '../types/types';

import { buttonStyle } from '../styles/styles';

const CalculatorButton = ({
  color,
  textContent,
  space,
  onHandleEvent,
}: CalculatorButtonInterface) => (
  <Grid item xs={space}>
    <Button
      fullWidth
      sx={buttonStyle(color)}
      variant="contained"
      onClick={(event) => onHandleEvent(event)}
    >
      {textContent}
    </Button>
  </Grid>
);

export default CalculatorButton;
