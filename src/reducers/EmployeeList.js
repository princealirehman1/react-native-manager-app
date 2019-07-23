import * as constrants from '../constants';

const INITAL_STATE=[];

export default (state , action=null) =>{

    switch(action.type){

        case constrants.EMPLOYEE_LIST:{

            return({ ...state , employeeList:action.payload });
        }

        default:{

            return({...state, employeeList:INITAL_STATE});
        }

    }

}