import axios from 'axios'

export function getDogs() {
    return function(dispatch) {
      return axios.get('http://localhost:3001/dogs')
        .then(response => {
          dispatch({ type: "GET_DOGS", payload: response.data });
        })
        .catch(err=>{
          console.log(err)
        });
    };
  }

  export function addDogs(dog) {
    return function(dispatch) {
      return axios.post('http://localhost:3001/dog',dog)
        .then(response => {
          console.log(response.data)
          dispatch({ type: "ADD_DOG", payload: response.data });
        })
        .catch(err=>{
          console.log(err)
        });
    };
  }

  export function getDogDetails(id) {
    return function(dispatch) {
      return axios.get(`http://localhost:3001/dogs/${id}`)
        .then(response => {
          dispatch({ type: "GET_DOGDETAILS", payload: response.data });
        });
    };
  }

export function getDogsByName(name) {
    return function(dispatch) {
      return axios.get(`http://localhost:3001/dogs?name=${name}`)
        .then((response) => {
          dispatch({ type: "GET_NAMEDOGS", payload: response.data });
        })
        .catch(err=>{
          console.log(err)
        });
    };
  }

export function getTemperaments() {
    return function(dispatch) {
      return axios.get('http://localhost:3001/temperament')
        .then(response => {
          dispatch({ type: "GET_TEMPES", payload: response.data });
        })
        .catch(err=>{
          console.log(err)
        });
    };
  }