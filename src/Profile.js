import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import {connect} from 'react-redux';

class Profile extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <View style={{marginTop:40,alignItems:'center',marginTop:100}}>
        <View style={{width:200,justifyContent:'space-around'}}>
            <Text style={{marginBottom:20}}>Your name is {this.props.name} and age is {this.props.age}</Text>
            <TextInput placeholder='Enter name' style={styles.ip} onChangeText={(name)=>this.props.handleName(name)} />
            <TextInput placeholder='Enter age' style={[styles.ip,{marginTop:20}]} onChangeText={(age)=>this.props.handleAge(age)} />
            
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name:state.name,
    age:state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleName: (name)=> {
        dispatch({type:'HANDLE_NAME',payload:name})
    },
    handleAge: (age)=> {
        dispatch({type:'HANDLE_AGE',payload:age})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile) ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ip:{
      borderColor:'red',
      borderWidth:1,
      paddingVertical:10,
      paddingHorizontal:20
  }
});
