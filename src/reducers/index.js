import { combineReducers } from 'redux';
import Resume from './resume';


const rootReducer = combineReducers({
  resume: Resume //gives us the entire resume
});

export default rootReducer;
