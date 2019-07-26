import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import jobPost from './jobPost';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  jobPost
});
