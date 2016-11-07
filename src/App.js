import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}
