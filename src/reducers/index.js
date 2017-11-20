import { combineReducers } from 'redux';
import selectedReducer from './SelectedReducer';
import updateModuleReducer from './UpdateModuleReducer';

const globalReducer = combineReducers({
    selectedReducer: selectedReducer,
   
});

export default globalReducer;