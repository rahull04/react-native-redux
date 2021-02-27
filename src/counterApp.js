import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import {connect} from 'react-redux';

class CounterApp extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <View style={{marginTop:40,alignItems:'center',marginTop:100}}>
        <View style={{flexDirection:'row',width:200,justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=> this.props.increaseCounter()}>
            <Text>Increase</Text>
          </TouchableOpacity>
    <Text>{this.props.counter}</Text>
          <TouchableOpacity onPress={()=> this.props.decreaseCounter()}>
            <Text>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter:state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: ()=>  dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter: ()=>  dispatch({type:'DECREASE_COUNTER'}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterApp) ;

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
