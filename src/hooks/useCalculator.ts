import { Dispatch } from 'redux';
import {
  add,
  changeValue,
  deleteAction,
  divide,
  multiply,
  reset,
  setFirstValue,
  setFlag,
  setOperation,
  subtract,
} from '../store/calculatorSlice';

const useCalculator = (
  dispatch: Dispatch,
  currentValue: string,
  currentOperation: string,
  flag: boolean
) => {
  const handleDelete = () => {
    currentValue.length === 1
      ? dispatch(deleteAction('0'))
      : dispatch(deleteAction(currentValue.slice(0, -1)));
  };

  const handleInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).textContent || '';

    if (currentValue === '0') {
      dispatch(changeValue(value));
      return;
    }

    if (
      currentValue.includes('.') &&
      (e.target as HTMLButtonElement).textContent === '.'
    )
      return;

    if (flag) {
      dispatch(setFirstValue(currentValue));
      dispatch(changeValue(value));
      dispatch(setFlag(false));
      return;
    }

    dispatch(changeValue(currentValue.concat(value)));
  };

  const handleOperation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const operation = (e.target as HTMLButtonElement).textContent || '';

    if (currentOperation === '') {
      dispatch(setOperation(operation));
      dispatch(setFlag(true));
    } else {
      operations(currentOperation);
      dispatch(setOperation(operation));
      dispatch(setFlag(true));
    }
  };

  const handleReset = () => dispatch(reset());

  const handleResult = () => operations(currentOperation);

  const operations = (operation: string) => {
    switch (operation) {
      case '+':
        dispatch(add());
        break;
      case '-':
        dispatch(subtract());
        break;
      case '*':
        dispatch(multiply());
        break;
      case '/':
        dispatch(divide());
        break;
      default:
        break;
    }
  };

  return {
    handleDelete,
    handleInput,
    handleOperation,
    handleReset,
    handleResult,
  };
};

export default useCalculator;
