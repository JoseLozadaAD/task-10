import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import CalculatorBody from './components/CalculatorBody';
import CalculatorHeader from './components/CalculatorHeader';
import useCalculator from './hooks/useCalculator';
import { RootState } from './store/store';

import { calcStyle } from './styles/styles';

const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.calculator.value);
  const operation = useSelector(
    (state: RootState) => state.calculator.operation
  );
  const {
    handleDelete,
    handleInput,
    handleOperation,
    handleReset,
    handleResult,
  } = useCalculator(dispatch, value, operation);

  return (
    <Grid container direction="row" rowSpacing={4} maxWidth="md" sx={calcStyle}>
      <CalculatorHeader value={value} />

      <CalculatorBody
        onHandleDelete={handleDelete}
        onHandleInput={handleInput}
        onHandleOperation={handleOperation}
        onHandleReset={handleReset}
        onHandleResult={handleResult}
      />
    </Grid>
  );
};

export default App;
