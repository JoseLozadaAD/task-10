import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '0',
  operation: '',
  firstValue: '0',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      if (state.value === '0') {
        state.value = action.payload;
        return;
      }

      state.value += action.payload;
    },
    deleteAction: (state, action) => {
      state.value = action.payload;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
      state.firstValue = state.value;
    },
    add: (state) => {
      state.value = (
        parseFloat(state.firstValue) + parseFloat(state.value)
      ).toString();
      state.operation = '';
    },
    subtract: (state) => {
      state.value = (
        parseFloat(state.firstValue) - parseFloat(state.value)
      ).toString();
      state.operation = '';
    },
    multiply: (state) => {
      state.value = (
        parseFloat(state.firstValue) * parseFloat(state.value)
      ).toString();
      state.operation = '';
    },
    divide: (state) => {
      state.value = (
        parseFloat(state.firstValue) / parseFloat(state.value)
      ).toString();
      state.operation = '';
    },
    reset: (state) => {
      state.value = '0';
    },
  },
});

export const {
  reset,
  changeValue,
  deleteAction,
  setOperation,
  add,
  subtract,
  multiply,
  divide,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
