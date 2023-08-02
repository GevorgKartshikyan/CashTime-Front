import { createReducer } from '@reduxjs/toolkit';
import setJobFormData from '../actions/createJobForm';

const initialState = {
  dataFromChild1: '',
  dataFromChild2: [],
  dataFromChild3: '',
  dataFromChild4: {
    method: 'Hourly Rate',
    priceFrom: null,
    priceTo: null,
    maxPrice: null,
  },
  dataFromChild5: '',
  dataFromChild6: {
    selectCountry: '',
    address: {},
    selectedPhoto: '',
    phoneNumber: '',
  },
};
export default createReducer(initialState, (builder) => {
  builder.addCase(setJobFormData, (state, action) => ({
    ...state,
    dataFromChild1: action.payload.data.dataFromChild1,
    dataFromChild2: action.payload.data.dataFromChild2,
    dataFromChild3: action.payload.data.dataFromChild3,
    dataFromChild4: {
      ...state.dataFromChild4,
      ...action.payload.data.dataFromChild4,
    },
    dataFromChild5: action.payload.data.dataFromChild5,
    dataFromChild6: {
      ...state.dataFromChild6,
      ...action.payload.data.dataFromChild6,
    },
  }));
});
