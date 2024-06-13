import { createSlice } from '@reduxjs/toolkit';
import ImgBlancGlacier from '../images/configurateur/couleurs/selection/blanc.jpg';
import ImgBleuAlpine from '../images/configurateur/couleurs/selection/bleu.jpg';
import ImgNoirProfond from '../images/configurateur/couleurs/selection/noir.jpg';
import CarModels from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg';
import ImgBlanc1 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg';
import ImgBlanc2 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg';
import ImgBlanc3 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg';
import ImgBlanc4 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg';
import ImgBleu1 from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg';
import ImgBleu2 from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg';
import ImgBleu3 from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg';
import ImgBleu4 from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg';
import ImgNoir1 from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg';
import ImgNoir2 from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg';
import ImgNoir3 from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg';
import ImgNoir4 from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg';

const initialState = {
  pure: {
    prix: 54700,
    photo: CarModels,
    color: [
      { option: "Blanc Glacier", photo: ImgBlancGlacier, prix: 0 },
      { option: "Bleu Alpine", photo: ImgBleuAlpine, prix: 1800 },
      { option: "Noir Profond", photo: ImgNoirProfond, prix: 840 }
    ],
  },
  legend: [
    {
      options: {
        color: [
          { option: "Blanc Glacier", photo: ImgBlancGlacier, prix: 0 },
          { option: "Bleu Alpine", photo: ImgBleuAlpine, prix: 1800 },
          { option: "Noir Profond", photo: ImgNoirProfond, prix: 840 }
        ],
      }
    }
  ],
  configCar: {
    prix: 0,
    modele: null,
    carouselPhoto: {
      carouselPhotoBlanc: [ImgBlanc1, ImgBlanc2, ImgBlanc3, ImgBlanc4],
      carouselPhotoBleu: [ImgBleu1, ImgBleu2, ImgBleu3, ImgBleu4],
      carouselPhotoNoir: [ImgNoir1, ImgNoir2, ImgNoir3, ImgNoir4],
      selected:[]
    },
    color: [
      { option: "Blanc Glacier", photo: ImgBlancGlacier, prix: 0 },
      { option: "Bleu Alpine", photo: ImgBleuAlpine, prix: 1800 },
      { option: "Noir Profond", photo: ImgNoirProfond, prix: 840 }
    ],
  },
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
      const selectedColorOption = action.payload;
      const selectedColor = state.configCar.color.find(color => color.option === selectedColorOption);
    
      if (selectedColor) {
        state.configCar.selectedColor = selectedColor;
    
        switch (selectedColorOption) {
          case "Blanc Glacier":
            state.configCar.carouselPhoto.selected = state.configCar.carouselPhoto.carouselPhotoBlanc;
            break;
          case "Bleu Alpine":
            state.configCar.carouselPhoto.selected = state.configCar.carouselPhoto.carouselPhotoBleu;
            break;
          case "Noir Profond":
            state.configCar.carouselPhoto.selected = state.configCar.carouselPhoto.carouselPhotoNoir;
            break;
          default:
            state.configCar.carouselPhoto.selected = state.configCar.carouselPhoto.carouselPhotoBlanc; // Par défaut, utilise Blanc Glacier
        }
      }
    }
    
  }
});

export const { nextStep, prevStep, selectOption, resetConfiguration, modele, selectColor } = configuratorSlice.actions;

export default configuratorSlice.reducer;
