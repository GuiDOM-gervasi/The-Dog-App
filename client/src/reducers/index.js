const initialState = {
  dogsName: [],
  newDogs: [],
  dogDetails: {},
  tempes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DOG":
      return {
        ...state,
        newDogs: state.newDogs.concat(action.payload),
      };
    case "GET_DOGDETAILS":
      return {
        ...state,
        dogDetails: action.payload,
      };
    case "GET_NAMEDOGS":
      return {
        ...state,
        dogsName: action.payload,
      };
    case "GET_TEMPES":
      return {
        ...state,
        tempes: state.tempes.concat(action.payload),
      };
    case "SET_FILTER":
      console.log("entre");
      return {
        ...state,
        dogsName: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
