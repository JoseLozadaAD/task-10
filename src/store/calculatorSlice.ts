import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '0',
  operation: '',
  firstValue: '0',
  flag: false,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    deleteAction: (state, action) => {
      state.value = action.payload;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
      state.firstValue = state.value;
    },
    add: (state) => {
      state.value = (parseFloat(state.firstValue) + parseFloat(state.value))
        .toFixed(2)
        .toString();
      state.operation = '';
    },
    subtract: (state) => {
      state.value = (parseFloat(state.firstValue) - parseFloat(state.value))
        .toFixed(2)
        .toString();
      state.operation = '';
    },
    multiply: (state) => {
      state.value = (parseFloat(state.firstValue) * parseFloat(state.value))
        .toFixed(2)
        .toString();
      state.operation = '';
    },
    divide: (state) => {
      state.value = (parseFloat(state.firstValue) / parseFloat(state.value))
        .toFixed(2)
        .toString();
      state.operation = '';
    },
    reset: (state) => {
      state.value = '0';
      state.firstValue = '';
      state.operation = '';
      state.flag = false;
    },
    setFlag: (state, action) => {
      state.flag = action.payload;
    },
    setFirstValue: (state, action) => {
      state.firstValue = action.payload;
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
  setFlag,
  setFirstValue,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
