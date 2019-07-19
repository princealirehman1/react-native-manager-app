import { EMAIL_CHANGED , PASSWORD_CHANGED , LOGIN_USER_SUCCESS , LOGIN_USER_FAILED , SHOW_SPINNER , 
    ADD_EMPLOYEE_NAME_CHANGED, ADD_EMPLOYEE_PHONE_CHANGED, ADD_EMPLOYEE_SHIFT_CHANGED , SAVE_EMPLOYEE_DATA , EMPLOYEE_DATA_CREATED} from '../constants';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



export const emailChanged = (newEmail) => {
    return({
        type: EMAIL_CHANGED,
        payload: newEmail
    });
}

export const passwordChanged = (newPassword) => {
    return({
        type: PASSWORD_CHANGED,
        payload: newPassword
    });
}

export const loginUser = ( username , password ) => {

    return (dispatch)=>{

        firebase.auth().signInWithEmailAndPassword(username,password).then((user)=>{

            loginUserSuccess(dispatch , user);

        }).catch((error)=>{

            error.code === "auth/user-not-found" ? (

                firebase.auth().createUserWithEmailAndPassword(username,password).then((user)=>{

                    loginUserSuccess(dispatch , user);


                }).catch((error)=>{

                    loginUserFailed(dispatch , error)

                })

            ) : (

                loginUserFailed(dispatch , error)
            )

        });
    }

}

const loginUserSuccess = (dispatch , user) => {

    dispatch({

        type: LOGIN_USER_SUCCESS ,
        payload : user

    });

    Actions.reset("Dashboard");

    // Actions.Dashboard();

};

const loginUserFailed = (dispatch , error) => {

    dispatch({

        type: LOGIN_USER_FAILED ,
        payload : error

    });

};

export const showSpinner = (boolValue) =>{

    return({

        type:SHOW_SPINNER , payload: boolValue

    });

}

export const addEmployeeNameChanged = (newName) => {

    return({
        type: ADD_EMPLOYEE_NAME_CHANGED,
        payload: newName
    });

}

export const addEmployeePhoneChanged = (newPhone) => {

    return({
        type: ADD_EMPLOYEE_PHONE_CHANGED,
        payload: newPhone
    });

}

export const addEmployeeShiftChanged = (newShift) => {

    return({
        type: ADD_EMPLOYEE_SHIFT_CHANGED,
        payload: newShift
    });

}

export const saveEmployeeData = (name , phone , shift) => {

    return (dispatch)=>{

        const { currentUser } = firebase.auth();

        firebase.database().ref(`/users/${ currentUser.uid }/employees`).push({  name ,  phone , shift }).then((response)=>{

            dispatch({type: EMPLOYEE_DATA_CREATED});

            Actions.pop();

        });

    }

    // return({
    //     type: SAVE_EMPLOYEE_DATA,
    // });

}