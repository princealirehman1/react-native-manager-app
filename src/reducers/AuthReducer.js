import { EMAIL_CHANGED , PASSWORD_CHANGED , LOGIN_USER_SUCCESS , LOGIN_USER_FAILED,   SHOW_SPINNER } from '../constants';

const INITIAL_STATE = { email : '' , password: '', loading:false , error:'' , user:null };

export default (state , action) => {

    console.log(action);

    switch(action.type){

        case EMAIL_CHANGED:{

            return({ ...state , email : action.payload , error : ''});
        }

        case PASSWORD_CHANGED : {

            return({ ...state, password: action.payload , error: ''});
        }

        case LOGIN_USER_SUCCESS: {

            return({ ...state ,loading:false, user: action.payload , error: '' });
        }

        case LOGIN_USER_FAILED : {

            return({ ...state , loading:false ,  error : action.payload });
        }

        case SHOW_SPINNER: {

            return({ ...state,loading:action.payload });
        }

        default :{

            return (INITIAL_STATE);

        }

    }

}