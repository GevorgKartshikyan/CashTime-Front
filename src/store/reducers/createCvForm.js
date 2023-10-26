import { createReducer } from '@reduxjs/toolkit';
import { setCvFormData } from '../actions/createCvForm';

const initialState = {
  dataSignUpFirstStep: {
    isFreelancer: null,
    yourGoal: null,
  },
  dataFromChild1: {
    languages: null,
    professionValue: '',
  },
  dataFromChild2: {},
  dataFromChild3: [],
  dataFromChild5: {
    cvBio: '',
  },
  dataFromChild6: {},
  dataFromChild7: {
    selectCountry: '',
    address: {},
    selectedPhoto: '',
    phoneNumber: '',
  },
  // data: {},
};
export default createReducer(initialState, (builder) => {
  builder
    .addCase(setCvFormData, (state, action) => ({
      ...state,
      dataSignUpFirstStep: {
        ...state.dataSignUpFirstStep,
        ...action.payload.data.dataSignUpFirstStep,
      },
      dataFromChild1: {
        ...state.dataFromChild1,
        ...action.payload.data.dataFromChild1,
      },
      dataFromChild2: {
        ...state.dataFromChild2,
        ...action.payload.data.dataFromChild2,
      },
      dataFromChild3: action.payload.data.dataFromChild3,
      dataFromChild5: {
        ...state.dataFromChild5,
        ...action.payload.data.dataFromChild5,
      },
      dataFromChild6: action.payload.data.dataFromChild6,
      dataFromChild7: {
        ...state.dataFromChild7,
        ...action.payload.data.dataFromChild7,
      },
    }));
});
