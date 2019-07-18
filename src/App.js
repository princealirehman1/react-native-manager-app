import  React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title , Text } from 'native-base';

import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  ReduxThunk from 'redux-thunk';
import Reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component{

    componentDidMount(){

        const firebaseConfig = {
            apiKey: "AIzaSyDYgEDjExn0CEX3t61jxeEX1ypj1dPfp9M",
            authDomain: "managerapp-5d3e7.firebaseapp.com",
            databaseURL: "https://managerapp-5d3e7.firebaseio.com",
            projectId: "managerapp-5d3e7",
            storageBucket: "",
            messagingSenderId: "843675624524",
            appId: "1:843675624524:web:5c9c756eb84457db"
          };

          firebase.initializeApp(firebaseConfig);
    }

    render(){

        const store = createStore(Reducers,{},applyMiddleware(ReduxThunk))

        return(
            <Provider store= { store }>
                <Container>
                    <Header>
                        <Left/>
                        <Body >
                            <Title> Manager App </Title>
                        </Body> 
                         <Right/>
                    </Header>
                    <LoginForm/>
                </Container>
            </Provider>
        );
    }
}

export default App;