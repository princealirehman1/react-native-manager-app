import * as constants from '../constants';

const INITIAL = { name:'' , phone:'',shift:'Monday' };

export default (state , action) => {

    switch(action.type){

        case constants.ADD_EMPLOYEE_NAME_CHANGED:{
            
            console.log(state);

            return({ ...state , name: action.payload });

        }

        case constants.ADD_EMPLOYEE_PHONE_CHANGED:{

            return({ ...state , phone: action.payload });

        }

        case constants.ADD_EMPLOYEE_SHIFT_CHANGED :{


            return({ ...state , shift:action.payload });

        }

        case constants.SAVE_EMPLOYEE_DATA:{

            return({...state,employees:em});
        }

        case constants.EMPLOYEE_DATA_CREATED:{

            return({ ...state, name:'' , phone:'',shift:'' });
        }

        case constants.UPDATE_INITIAL_STATE_EMPLOYEE:{

            return({ ...state, [action.payload.keyy] : action.payload.valuee });
        }

        default:{

            return(INITIAL);
        }
    }

}