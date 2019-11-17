import {
    FETCH_SUCCESS,
    FETCH_ERROR,
    FETCH_LOADING
  } from "../types/index";
  
  export default function simpleReducer(state = [], action) {
    switch (action.type) {
      case FETCH_SUCCESS:
        return {
          data: action.payload,
          loading: false,
          error: null
        };
      case FETCH_ERROR:
        return { ...state, loading: false, error: action.payload };
      case FETCH_LOADING:
        return { ...state, loading: true, error: null };
      default:
        return state;
    }
  }