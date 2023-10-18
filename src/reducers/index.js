import { combineReducers } from 'redux';
import postReducer from './postReducer';

// bring in all your reducers , register them with combineReducers
// combineReducers will be used as the root reducer in the store
export default combineReducers({
    posts: postReducer
})