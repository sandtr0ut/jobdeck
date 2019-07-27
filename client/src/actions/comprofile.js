// =======================================
// CONTAINS COMPROFILE-RELATED AXIOS REQUESTS
// =======================================

import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_COMPROFILE,
  GET_COMPROFILES,
  COMPROFILE_ERROR,
  CLEAR_COMPROFILE,
  ACCOUNT_DELETED
} from './types';

// Get current users company profile

//======================================
//TODO: Update actions and route ref's
//======================================
export const getCurrentComProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/comprofile/me');

    dispatch({
      type: GET_COMPROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get All Company Profiles
export const getComProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_COMPROFILE });

  try {
    const res = await axios.get('/api/comprofile');

    dispatch({
      type: GET_COMPROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Company Profile By ID
export const getComProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/comprofile/user/${userId}`);

    dispatch({
      type: GET_COMPROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: COMPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update company profile
export const createComProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/comprofile', formData, config);

    dispatch({
      type: GET_COMPROFILE,
      payload: res.data
    });

    dispatch(
      setAlert(
        edit ? 'Company Profile Updated' : 'Company Profile Created',
        'success'
      )
    );

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: COMPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete account & profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('/api/profile');

      dispatch({ type: CLEAR_COMPROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert('Your account has been permanantly deleted'));
    } catch (err) {
      dispatch({
        type: COMPROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
