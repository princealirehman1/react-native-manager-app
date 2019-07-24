import React, { Component } from 'react';
import { Router , Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';

const RouterComponent = () =>{

    return(

        <Router>

            <Scene key="root" hideNavBar={true}> 

                <Scene key="AuthScreen" hideNavBar={true}>

                    <Scene key="LoginForm" component={LoginForm} initial/>

                </Scene>

                <Scene key="Dashboard">

                    <Scene key="EmployeeList" component={EmployeeList}  hideNavBar={true} initial/>
                    <Scene key ="AddEmployee" component={AddEmployee} hideNavBar={true}  />
        
                </Scene>

            </Scene>

        </Router>
    );

}

export default RouterComponent;