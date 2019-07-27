import {
  GET_COMPROFILE,
  COMPROFILE_ERROR,
  CLEAR_COMPROFILE,
  //   UPDATE_COMPROFILE,
  GET_COMPROFILES
} from '../actions/types';

const initialState = {
  comprofile: null,
  comprofiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log('payload',payload);

  switch (type) {
    case GET_COMPROFILE:
      // case UPDATE_COMPROFILE:
      return {
        ...state,
        comprofile: payload,
        loading: false
      };
    case GET_COMPROFILES:
      return {
        ...state,
        comprofiles: payload,
        loading: false
      };

    case COMPROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_COMPROFILE:
      return {
        ...state,
        comprofile: null,
        repos: [],
        loading: false
      };

    default:
      return state;
  }
}
