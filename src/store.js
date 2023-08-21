// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  // Add your initial state properties here
};

// Reducer
const rootReducer = (state = initialState, action) => {
  // Handle actions and update state here
  return state;
};

const store = createStore(rootReducer);

export default store;
