const initialState = {
    dogs: [],
    dogsName:[],
    newDogs:[],
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
                dogDetails: action.payload     
        }
        case "GET_NAMEDOGS":
        return {
            ...state,
            dogsName: action.payload
        }
        case "GET_TEMPES":
        return {
            ...state,
            tempes: state.tempes.concat(action.payload), 
        }
        case "SET_FILTER":
            console.log("entre")
            return {
                ...state,
                dogsName: action.payload 

            }
        default:
            return state
    }
}

export default rootReducer