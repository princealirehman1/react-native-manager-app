import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddEmployeeReducer from './AddEmployeeReducer';
import EmployeeList from './EmployeeList';

export default combineReducers({

    auth: AuthReducer,
    addEmployee:AddEmployeeReducer,
    employeeList: EmployeeList

});