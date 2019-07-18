import  React, { Component } from 'react';
import { View , Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers';

class App extends Component{

    render(){

        return(
            <Provider store= { createStore(Reducers) }>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;