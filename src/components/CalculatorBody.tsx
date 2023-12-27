import { Grid } from '@mui/material';

import CalculatorButton from './CalculatorButton';
import { CALCULATOR_NUMBERS } from '../types/constants';
import type { CalculatorBodyInterface } from '../types/types';

import { calcBodyStyle } from '../styles/styles';

const CalculatorBody = ({
  onHandleDelete,
  onHandleInput,
}: CalculatorBodyInterface) => {
  return (
    <Grid container padding={4} sx={calcBodyStyle}>
      <Grid item xs={9}>
        <Grid container rowSpacing={2} columnSpacing={3}>
          {CALCULATOR_NUMBERS.map((number) => (
            <CalculatorButton
              key={number}
              color="#cecece"
              textContent={number}
              space={4}
              onHandleEvent={onHandleInput}
            />
          ))}

          <CalculatorButton
            color="#cecece"
            textContent="/"
            space={4}
            onHandleEvent={() => {}}
          />
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container rowSpacing={2} marginLeft={3} paddingRight={3}>
          <CalculatorButton
            color="#ff5050"
            textContent="DEL"
            space={12}
            onHandleEvent={onHandleDelete}
          />

          <CalculatorButton
            color="#cecece"
            textContent="+"
            space={12}
            onHandleEvent={() => {}}
          />

          <CalculatorButton
            color="#cecece"
            textContent="-"
            space={12}
            onHandleEvent={() => {}}
          />

          <CalculatorButton
            color="#cecece"
            textContent="*"
            space={12}
            onHandleEvent={() => {}}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CalculatorBody;
