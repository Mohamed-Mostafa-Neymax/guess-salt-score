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
      state.saltScore = action.payload.saltScore;
      state.scalpHairCoverage = action.payload.scalpHairCoverage;
      state.isGuessEstimated = true;
    },
    setCorrectScore(state, action) {
      state.correctSaltScore = action.payload.correctSaltScore;
      state.correctScalpHairCoverage = action.payload.correctScalpHairCoverage;
    },
    resetGuessing(state) {
      state.saltScore = 0;
      state.scalpHairCoverage = 100;
      state.isGuessEstimated = false;
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

/* NOTES

            Baseline                                                                       24 Week
Patien 1    submition (put calculation points in locaStorage ['patient1_baseline'])        submition (put calculation points in locaStorage ['patient1_24week'])
Patien 2    submition (put calculation points in locaStorage ['patient2_baseline'])        submition (put calculation points in locaStorage ['patient2_24week']) 
Patien 3    submition (put calculation points in locaStorage ['patient3_baseline'])        submition (put calculation points in locaStorage ['patient3_24week'])

localStorage Keys
  patient
  patient1_baseline
  patient1_24week
  patient2_baseline
  patient2_24week
  patient3_baseline
  patient3_24week
*/