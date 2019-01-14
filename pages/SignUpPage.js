import React, { Component } from 'react';
import { View,AppRegistry, Text, StyleSheet,ImageBackground,Image,TextInput,Button,TouchableOpacity,Alert} from 'react-native';
import axios from 'axios'
import {DOMAIN} from '../constant/environment'
import {login} from '../action/userAction'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-native'
class SignUpPage extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            email : "" ,firstname:"",lastname:"", password : "",
        }        
    }
 
    onChangeText(text, field) {
            this.setState({ [field]: text });
    }
    async onSubmit(){
        if (this.state.email=='' || this.state.firstname ==''||this.state.lastname==''||this.state.password==''){
            Alert.alert('โปรดกรอกข้อมูลให้ครบถ้วน')
        }
        else {            
          try{
            Alert.alert('สร้างบัญชีสำเร็จ!')
            const result = await axios.post(DOMAIN +"/user/register", {email : this.state.email , lName:this.state.lastname , fName : this.state.firstname , password :this.state.password})
            const data = result.data
            axios.defaults.headers.common.authorization = "Bearer " + data.token
            this.props.login(data.token)
            this.props.history.push("/login")             
            //console.warn(data.token)
          }catch(err){
            Alert.alert('E-mailนี้มีผู้ใช้แล้ว')
            console.log(err)
            //console.warn("Register failed")
          }
        }
      } 
      render() {
        return (
          
          <ImageBackground style= {{height:'100%',width:'100%'}} source={require('../assets/BG.png')}>
          <View>
                <TouchableOpacity
                onPress={()=>this.props.history.push('/ItemPage')}>
                  <Image style= {{height:30,width:30,marginLeft:25,marginTop:45}} source={require('../assets/left-arrow.png')}></Image>
                </TouchableOpacity>
                </View>
            <View >         
              <Image style= {{height:'60%',width:'60%',marginLeft:'auto',marginRight:'auto',marginTop:-60}} source={require('../assets/logo4.png')}></Image>     
            </View>     
            <TextInput
                    underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 180, left: 50,padding : 10 }}
                    placeholder="  Email"
                    onChangeText={(text) => this.onChangeText(text, 'email')}
                />
                <TextInput
                underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 245, left: 50,padding : 10}}
                    placeholder="  Firstname"
                    onChangeText={(text) => this.onChangeText(text, 'firstname')}
                />
                 <TextInput
                    underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 310, left: 50,padding : 10 }}
                    placeholder="  Lastname"
                    onChangeText={(text) => this.onChangeText(text, 'lastname')}
                />
                <TextInput
                secureTextEntry
                underlineColorAndroid='rgba(255,255,255,0)'
                    style={{height: 50,width:'70%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    position: 'absolute', top: 375, left: 50,padding : 10}}
                    placeholder="  Password"
                    onChangeText={(text) => this.onChangeText(text, 'password')}
                    
                />
                <View style={{height: 60,width:100,marginLeft:200,position: 'absolute',top: 440 }}>
                <Button
                  title="Sign Up!"
                  color="#FF8000"
                  accessibilityLabel="Sign Up"
                  onPress={()=>this.onSubmit()}

                />
                </View>
          </ImageBackground>
          
        );
      }
    }

export default withRouter(connect(null , {login})(SignUpPage))