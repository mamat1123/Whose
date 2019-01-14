import React, { Component } from 'react';
import { View,AppRegistry, Text, StyleSheet,ImageBackground,Image,TextInput,Button,Alert } from 'react-native';
import axios from 'axios'
import { DOMAIN } from '../constant/environment';
import {connect} from 'react-redux'
import {login} from '../action/userAction'
export default connect(null , {login })(class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: false,
        email : "" , password : "",
    }
}
async onSubmit(){

    if(this.state.email == "" || this.state.password == ""){
      Alert.alert('โปรดกรอก Email/Password ให้ครบถ้วน')
    }
   else{
    try{
    console.log(this.state)
    const result = await axios.post(DOMAIN + "/user/login" , {email : this.state.email , password : this.state.password})
    const data = result.data
    const token = data.token
    axios.defaults.headers.common.authorization = "Bearer " + data.token;
    this.props.login(token)
    // this.props.history.push("/signup")
    console.log(result)
  }catch(err){
    Alert.alert('E-mail/รหัสผ่าน ผิด!')
    console.log(err)
    //console.warn("Login Failed")
  
}
}
}
onChangeText(text, field) {
        this.setState({ [field]: text });
      }
  render() {
   
    return (
      <ImageBackground style= {{height:'100%',width:'100%'}} source={require('../assets/BG.png')}>
        <View>
          <Image style= {{height:'72%',width:'72%',marginLeft:'auto',marginRight:'auto'}} source={require('../assets/logo4.png')}></Image>
        </View>
        <Text style={{ color: 'red', marginLeft: 'auto', marginRight: 'auto',fontWeight: 'bold' }}>{this.state.Error}</Text>
        <TextInput
                    underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 240, left: 50,padding : 10 }}
                    placeholder="  Email"
                    onChangeText={(text) => this.onChangeText(text, 'email')}
                />

                <TextInput
                secureTextEntry
                underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 305, left: 50,padding : 10}}
                    placeholder="  Password"
                    onChangeText={(text) => this.onChangeText(text, 'password')}
                />
                <View style={{height: 60,width:100,marginLeft:200,position: 'absolute', top: 370 }}>
                <Button
                  title="Login"
                  color="#FF8000"
                  onPress={()=>this.onSubmit()}
                  accessibilityLabel="Login"                
                />
                </View>
                <View style={{height: 60,width:100,marginLeft:200,position: 'absolute',top: 415 }}>
                <Button
                  title="Sign Up?"
                  color="#8B5E30"
                  onPress={()=>this.props.history.push("/signup")}
                  accessibilityLabel="Sign Up?"
                />
                </View>
      </ImageBackground>
      
    );
  }
})