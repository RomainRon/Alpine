import { createSlice } from '@reduxjs/toolkit';
import ImgBlancGlacier1 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg';
import ImgBlancGlacier2 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg';
import ImgBlancGlacier3 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg';
import ImgBlancGlacier4 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg';
import ImgBleuAlpine from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg';
import ImgNoirProfond from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg';
import CarModels from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg';

const initialState = {
  pure: {
    prix: 54700,
    photo: CarModels,
    color: [
      { option: "Blanc Glacier", photo: ImgBlancGlacier1, prix: 0 },
      { option: "Bleu Alpine", photo: ImgBleuAlpine, prix: 1800 },
      { option: "Noir Profond", photo: ImgNoirProfond, prix: 840 }
    ],
    selectedColor: null,
  },
  legend: [
    {
      options: {
        color: [
          { option: "Blanc Glacier", photo: ImgBlancGlacier1, prix: 0 },
          { option: "Bleu Alpine", photo: ImgBleuAlpine, prix: 1800 },
          { option: "Noir Profond", photo: ImgNoirProfond, prix: 840 }
        ],
      }
    }
  ],
  configCar:[ {
    prix: 0,
    modele : null,
    carouselPhoto: [
      ImgBlancGlacier1, 
      ImgBlancGlacier2, 
      ImgBlancGlacier3, 
      ImgBlancGlacier4, 
    ]
  }],
  currentStep: 0,
  selectedOptions: {},
  price: 0
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
      state.price += option.prix;
    },
    resetConfiguration: (state) => {
      state.currentStep = 0;
      state.selectedOptions = {};
      state.price = 0;
    },
    modele: (state, action) => {
      const modeleIndex = action.payload;
      if (state.pure[modeleIndex]) {
        state.pure.photo = state.pure[modeleIndex].photo;
      }
    },

    selectColor: (state, action) => {
      const { modelIndex, colorIndex } = action.payload;
      const selectedModel = state.pure[modelIndex];
      if (selectedModel) {
        selectedModel.selectedColor = selectedModel.colors[colorIndex];
        selectedModel.photo = selectedModel.colors[colorIndex].photo;
        state.price += selectedModel.colors[colorIndex].prix;
      }
    }
  }
});

export const { nextStep, prevStep, selectOption, resetConfiguration, modele, selectColor } = configuratorSlice.actions;


export default configuratorSlice.reducer;