import { useState } from 'react';
import { Grid } from '@mui/material';

import CalculatorBody from './components/CalculatorBody';
import CalculatorHeader from './components/CalculatorHeader';
import useCalculator from './hooks/useCalculator';

import { calcStyle } from './styles/styles';

const App = () => {
  const [value, setValue] = useState<string>('0');
  const { handleDelete, handleInput } = useCalculator(setValue);

  return (
    <Grid container direction="row" rowSpacing={4} maxWidth="md" sx={calcStyle}>
      <CalculatorHeader value={value} />

      <CalculatorBody
        onHandleDelete={handleDelete}
        onHandleInput={handleInput}
      />
    </Grid>
  );
};

export default App;
