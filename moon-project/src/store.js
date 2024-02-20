import { createStore, applyMiddleware, combineReducers } from 'redux';

import logger from 'redux-logger';

//initial state to store both lat & long
const initialState = {
  location: {
    latitude: 0,
    longitude: 0,
    searchedLocation: '',
  },
};

//create reducer
const addCoordinatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COORDINATES_VALUE':
      return {
        latitude: action.payload.lat,
        longitude: action.payload.lng,
        searchedLocation: action.payload.searchedLocation,
      };
    default:
      return state;
  }
};

//create store
const store = createStore(
  combineReducers({
    addCoordinatesReducer,
  }),
  applyMiddleware(logger)
);

export default store;
