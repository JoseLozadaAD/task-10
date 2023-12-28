import { Dispatch } from 'redux';
import {
  add,
  changeValue,
  deleteAction,
  divide,
  multiply,
  reset,
  setOperation,
  subtract,
} from '../store/calculatorSlice';

const useCalculator = (
  dispatch: Dispatch,
  currentValue: string,
  currentOperation: string
) => {
  const handleDelete = () => {
    if (currentValue.length === 1) {
      return dispatch(deleteAction('0'));
    }

    return dispatch(deleteAction(currentValue.slice(0, -1)));
  };

  const handleInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = (e.target as HTMLButtonElement).textContent || '';

    if (
      currentValue.includes('.') &&
      (e.target as HTMLButtonElement).textContent === '.'
    ) {
      return;
    }

    dispatch(changeValue(value));
    return;
  };

  const handleOperation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const operation = (e.target as HTMLButtonElement).textContent || '';

    if (currentOperation === '') {
      dispatch(setOperation(operation));
      dispatch(reset());
    } else {
      switch (currentOperation) {
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

      dispatch(setOperation(operation));
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleResult = () => {
    switch (currentOperation) {
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
