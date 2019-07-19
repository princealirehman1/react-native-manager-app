import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddEmployeeReducer from './AddEmployeeReducer';

export default combineReducers({

    auth: AuthReducer,
    addEmployee:AddEmployeeReducer

});