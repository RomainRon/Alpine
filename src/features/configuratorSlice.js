import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 0,
  selectedOptions: {},
  price: 0,
};

const configuratorSlice = createSlice({
  name: 'configurator',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    selectOption: (state, action) => {
      const { step, option } = action.payload;
      state.selectedOptions[step] = option;
      // Update price based on selected options
      state.price += option.price;
    },
    resetConfiguration: (state) => {
      state.currentStep = 0;
      state.selectedOptions = {};
      state.price = 0;
    },
  },
});

export const { nextStep, prevStep, selectOption, resetConfiguration } = configuratorSlice.actions;

export default configuratorSlice.reducer;