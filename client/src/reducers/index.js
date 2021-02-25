const initialState = {
    dogs: [],
    newDogs:[],
    dogsByName: [],
    dogDetails: {},
    tempes: []
  };

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case "GET_DOGS":
            return {
                ...state,
                dogs: state.dogs.concat(action.payload),
            };
        case "ADD_DOG":
            return {
                ...state,
                newDogs: state.newDogs.concat(action.payload), 
            };
        case "GET_DOGDETAILS":
        return {
                ...state,
                dogDetail: action.payload     
        }
        case "GET_NAMEDOGS":
        return {
            ...state,
            dogsByName: action.payload
        }
        case "GET_TEMPES":
        return {
            ...state,
            tempes: state.tempes.concat(action.payload), 
        }
        default:
            return state
    }
}

export default rootReducer