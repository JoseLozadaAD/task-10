import { Grid, TextField } from '@mui/material';

import type { CalculatorHeaderInterface } from '../types/types';

import { calcInputStyle } from '../styles/styles';

const CalculatorHeader = ({ value }: CalculatorHeaderInterface) => (
  <Grid item xs={12}>
    <TextField
      fullWidth
      id="outlined-number"
      sx={calcInputStyle}
      inputProps={{ readOnly: true }}
      focused={false}
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
    />
  </Grid>
);

export default CalculatorHeader;
