import { EMAIL_CHANGED , PASSWORD_CHANGED , LOGIN_USER_SUCCESS , LOGIN_USER_FAILED , SHOW_SPINNER} from '../constants';
import firebase from 'firebase';

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

            dispatch({

                type: LOGIN_USER_SUCCESS ,
                payload : user

            })

        }).catch((error)=>{

            error.code === "auth/user-not-found" ? (

                firebase.auth().createUserWithEmailAndPassword(username,password).then((user)=>{

                    dispatch({

                        type: LOGIN_USER_SUCCESS ,
                        payload : user
        
                    })

                }).catch((error)=>{

                    dispatch({

                        type: LOGIN_USER_FAILED ,
                        payload : error
        
                    })

                })

            ) : (

                dispatch({

                    type: LOGIN_USER_FAILED ,
                    payload : error
    
                })
            )

        });
    }

}

export const showSpinner = (boolValue) =>{

    return({

        type:SHOW_SPINNER , payload: boolValue

    });

}