import {
    FETCH_SUCCESS,
    FETCH_ERROR,
    FETCH_LOADING
  } from "../types";
  import axios from "axios";
  import queryString from "query-string";
  
  const apiUrl = 'http://localhost:3000/simple';
  
  export const fetchLoading = () => {
    return {
      type: FETCH_LOADING
    };
  };
  
  export const fetchSuccess = payload => {
    return {
      type: FETCH_SUCCESS,
      payload
    };
  };
  
  export const fetchError = payload => {
    return {
      type: FETCH_ERROR,
      payload
    };
  };
  
  export const getAction = payload => {
    console.log('api', `${apiUrl}?${queryString.stringify(payload)}`)
    return dispatch => {
      dispatch(fetchLoading());
      return axios
        .get(`${apiUrl}?${queryString.stringify(payload)}`)
        .then(response => {
          dispatch(fetchSuccess(response.data));
        })
        .catch(error => {
          dispatch(fetchError(error));
        });
    };
  };