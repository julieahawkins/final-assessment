import { combineReducers } from 'redux';
import { houseData } from './data-reducer';
import { swornData } from './sworn-members-reducer';

const rootReducer = combineReducers({
  houseData,
  swornData
});


export default rootReducer;
