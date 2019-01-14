import React from 'react'
import {Button,AppRegistry,View,StyleSheet,Icon,Image,ImageBackground,TouchableOpacity} from 'react-native'
import user from '../assets/user.png'
import axios from 'axios'
import {withRouter} from 'react-router-native'
class ProfilePage extends React.Component{
    componentDidMount(){

    }
    constructor(){
        super()
        this.state ={
            currentPage : 0
        }
    }
    onPageChange(item){
       
        this.setState({currentPage : item})
       
    }
    render()
    {
      return(           
        <View style={styles.container}>                   
        <Image style= {{ width: 120,height:120,marginLeft:'auto',marginRight:'auto'}} source ={ user }/> 
        <View style={{height: 60,width:300,marginLeft:'auto',marginRight:'auto',marginTop:150}}>
                <Button
                  title="Sign Out"
                  color="red"
                  accessibilityLabel="Sign Out"
                />
                </View>                              
        </View>
        );
    }
  }
  const styles = StyleSheet.create(
    {
         container:
         {
             flex: 1,
             backgroundColor: 'pink'
         }
        }
         );
    AppRegistry.registerComponent('App', () => App);
            
export default ProfilePage