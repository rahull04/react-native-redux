import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import CounterApp from './src/counterApp';
import Profile from './src/Profile';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState ={
  counter:0,
  name:'{}',
  age:0,
}
const reducer = (state = initialState,action) =>{
  switch(action.type){
    case 'INCREASE_COUNTER':
      return {counter:state.counter+1};
    case 'DECREASE_COUNTER':
      return {counter:state.counter-1};
    case 'HANDLE_NAME':
      return {name:action.payload,age:state.age};
    case 'HANDLE_AGE':
      return {name:state.name,age:action.payload};
  }
  return state;
}

const store = createStore(reducer);

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Provider store={store}>
        {/* <CounterApp />  */}
        <Profile />
      </Provider>
      
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont:{
    flexDirection:'row',
    width:200,
    justifyContent:'space-around'
  },
  btn:{
    backgroundColor:'red',
    paddingHorizontal:15,
    paddingVertical:8,
  },
  txt:{
    fontSize:20,
    marginHorizontal:35
  }
});
