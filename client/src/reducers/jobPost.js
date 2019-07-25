import {
  GET_JOBPOSTS,
  JOBPOST_ERROR,
  UPDATE_JOBLIKES,
  DELETE_JOBPOST,
  ADD_JOBPOST,
  GET_JOBPOST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../actions/types';

const initialState = {
  jobposts: [],
  jobpost: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBPOSTS:
      return {
        ...state,
        jobposts: payload,
        loading: false
      };
    case GET_JOBPOST:
      return {
        ...state,
        jobpost: payload,
        loading: false
      };
    case ADD_JOBPOST:
      return {
        ...state,
        jobposts: [payload, ...state.jobposts],
        loading: false
      };
    case DELETE_JOBPOST:
      return {
        ...state,
        jobposts: state.jobposts.filter(jobpost => jobpost._id !== payload),
        loading: false
      };
    case JOBPOST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_JOBLIKES:
      return {
        ...state,
        jobposts: state.jobposts.map(jobpost =>
          jobpost._id === payload.id ? { ...jobpost, joblikes: payload.joblikes } : jobpost
        ),
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        jobpost: { ...state.jobpost, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        jobpost: {
          ...state.jobpost,
          comments: state.jobpost.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
