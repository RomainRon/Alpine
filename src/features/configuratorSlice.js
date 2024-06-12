import { createSlice } from '@reduxjs/toolkit';
import ImgBlancGlacier from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg';
import ImgBleuAlpine from '../images/configurateur/couleurs/selection/bleu.jpg';
import ImgNoirProfond from '../images/configurateur/couleurs/selection/noir.jpg';
import JanteStandard from '../images/configurateur/jantes/selection/jante-standard.jpg';
import JanteSerac from '../images/configurateur/jantes/selection/jante-serac.jpg';
import JanteLegend from '../images/configurateur/jantes/selection/jante-legende.jpg';

const initialState = {
  pure: [
    {
      prix: 54700,
          color: [
            { option: "Blanc Glacier", photo: ImgBlancGlacier, prix: 0 },
            { option: "Bleu Alpine", photo: ImgBleuAlpine, prix: 1800 },
            { option: "Noir Profond", photo: ImgNoirProfond, prix: 840 }
          ],
          
          jante: [
            { option: "Standard", photo: JanteStandard, prix: 0 },
            { option: "Serac", photo: JanteSerac, prix: 1000 },
          ]
        },
      
    
  ],
  legend: [
    {
      color: [
        { option: "Blanc Glacier", photo: ImgBlancGlacier, prix: 0 },
        { option: "Bleu Alpine", photo: ImgBleuAlpine, prix: 1800 },
        { option: "Noir Profond", photo: ImgNoirProfond, prix: 840 }
      ],
      jante: { option: 'Legend', photo: JanteLegend, prix: 0 }
    }
  ]
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
