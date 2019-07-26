import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_JOBPOSTS,
  JOBPOST_ERROR,
  UPDATE_JOBLIKES,
  DELETE_JOBPOST,
  ADD_JOBPOST,
  GET_JOBPOST,
  ADD_JOBCOMMENT,
  REMOVE_JOBCOMMENT
} from './types';

// Get job posts
export const getJobPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/jobposts');

    dispatch({
      type: GET_JOBPOSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add job like
export const addJobLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/joblike/${id}`);

    dispatch({
      type: UPDATE_JOBLIKES,
      payload: { id, joblikes: res.data }
    });
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove job like
export const removeJobLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/jobposts/unlike/${id}`);

    dispatch({
      type: UPDATE_JOBLIKES,
      payload: { id, joblikes: res.data }
    });
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete job post
export const deleteJobPost = id => async dispatch => {
  try {
    await axios.delete(`/api/jobposts/${id}`);

    dispatch({
      type: DELETE_JOBPOST,
      payload: id
    });

    dispatch(setAlert('Job Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add job post
export const addJobPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/jobposts', formData, config);

    dispatch({
      type: ADD_JOBPOST,
      payload: res.data
    });

    dispatch(setAlert('Job Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get job post
export const getJobPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/jobposts/${id}`);

    dispatch({
      type: GET_JOBPOST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add job comment
export const addJobComment = (jobPostId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/jobposts/jobcomment/${jobPostId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_JOBCOMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete job comment
export const deleteJobComment = (jobPostId, jobCommentId) => async dispatch => {
  try {
    await axios.delete(`/api/posts/comment/${jobPostId}/${jobCommentId}`);

    dispatch({
      type: REMOVE_JOBCOMMENT,
      payload: jobCommentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: JOBPOST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
