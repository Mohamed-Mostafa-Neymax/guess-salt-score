import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  patient: 1,
  saltScore: 0,
  scalpHairCoverage: 100,
  isGuessEstimated: false,
  correctSaltScore: 0,
  correctScalpHairCoverage: 0,
  points: 0
};

const guessSlice = createSlice({
  name: 'guess',
  initialState,
  reducers: {
    onGuessScore(state, action) {
      state.isGuessEstimated = true;
      state.saltScore = action.payload.saltScore;
      state.scalpHairCoverage = action.payload.scalpHairCoverage;
    },
    setCorrectScore(state, action) {
      state.correctSaltScore = action.payload.correctSaltScore;
      state.correctScalpHairCoverage = action.payload.correctScalpHairCoverage;
    },
    resetGuessing(state) {
      state.isGuessEstimated = false;
      state.saltScore = 0;
      state.scalpHairCoverage = 100;
    },
    persistPatient(state, action) {
      state.patient = action.payload;
    },
    setPoints(state, action) {
      state.points = action.payload;
    }
  }
});

export const guessActions = guessSlice.actions;
export const guessReducer = guessSlice.reducer;