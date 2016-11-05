import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

export default class App extends Component {

  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyCqclP8vBNHxyxG1wUNuBgclYjytLN10ew',
      authDomain: 'manager-7ec1e.firebaseapp.com',
      databaseURL: 'https://manager-7ec1e.firebaseio.com',
      storageBucket: 'manager-7ec1e.appspot.com',
      messagingSenderId: '845063586877'
    };

    firebase.initializeApp(config);
  }
  render(){
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    )
  }
}
