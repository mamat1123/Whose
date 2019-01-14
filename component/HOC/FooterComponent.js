import React from 'react'
import {View , StyleSheet, Text , ScrollView , TextInput , TouchableOpacity , Dimensions} from 'react-native'
import {withRouter} from 'react-router-native'
import Icon from 'react-native-vector-icons/Feather';
export default function FooterComponent(WrappedComponent){
    return withRouter(class MyFooterComponent extends React.Component{
        constructor(){
            super()
            this.state ={
                currentPage : 0
            }
        }
        onPageChange(item){
           
            this.setState({currentPage : item})
           
        }
        render(){
            return (
                <View style={styles.container}>               
                    <View style={styles.footer}>
                        <View style={styles.containerIconBottom}>
                            <TouchableOpacity onPress={()=>this.onPageChange(0)}>
                                <Icon name="home"color={this.state.currentPage == 0 ? "white" : "black"}  size={60}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerIconBottom}>
                            <TouchableOpacity onPress={()=>this.onPageChange(1)}>
                            <Icon name="user" color={this.state.currentPage == 1 ? "white" : "black"} size={60}/>
                            </TouchableOpacity>                           
                        </View>
                    </View>
                </View>
            )
        }
    })
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },  
    footer  : {
        flex : 0.15,
        backgroundColor : "#FF7E1C",
        flexDirection : "row"
    },
    containerIconBottom : {
        flex : 1,
        borderWidth : 1,
        borderTopColor : "#FF7E1C",
        borderBottomColor : "#FF7E1C",
        borderLeftColor : "white",
        borderRightColor : "white",
        justifyContent : "center",
        alignItems : "center",
     
        
    },  
    iconBottom : {
        
    }
})