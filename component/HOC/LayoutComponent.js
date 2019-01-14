import React from 'react'
import {View , StyleSheet, Text , ScrollView , TextInput , TouchableOpacity , Dimensions} from 'react-native'
import {withRouter} from 'react-router-native'
import Icon from 'react-native-vector-icons/Feather';
export default function LayoutComponent(WrappedComponent){
    return withRouter(class MyLayoutComponent extends React.Component{
        constructor(){
            super()
            this.state ={
                currentPage : 0,
                // text:''
            }
        }
        // onSearch(text){
        //         const newTitle = title.filter(function(item){
        //         const itemTitle = item.title.toUpperCase()
        //         const textTitle = text.toUpperCase()
        //         return itemTitle.indexOf(textTitle) >-1
        //     }) 
        //     this.setState({
        //         titleSource: this.state.titleSource.cloneWithRows(newTitle),
        //         text:text
        //     })
        // }
        onPageChange(item){
            this.setState({currentPage : item})
            if(item == 0){
                this.props.history.push('/ItemPage')
            }
            else if(item == 1){
                this.props.history.push('/profile')
            }
            
           
        }
        render(){
            //{console.warn(this.state.currentPage)}
            const {width , height} = Dimensions.get('window')
            return (
                <View style={styles.container}>
                {this.state.currentPage == 0 ? 
                    <View style={styles.header}>
                    <View  style={styles.ContainerSearchBox} >
                        <TextInput
                            style={{padding : 10 , flex : 1}}
                            placeholder={"ค้นหา...."}
                            onChangeText={()=>this.onSearch()}
                            // value= {this.state.text}
                          />
                        
                            <Icon style={{margin : 15}} name="search" color="black" />   
                        
                      
                    </View>
                    
                </View> : <View></View>}
                    
                        
                        <ScrollView 

                            style={{flex :0.7 , height : height /2,
                                backgroundColor : "rgb(231,231,231)",
               
                            }}
                        >
                            <WrappedComponent/>
                        </ScrollView>
                    
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
    container:{
        flex:1
    },
    header : {
        flex : 0.15,
        backgroundColor  : "#FF7E1C",
        justifyContent : "center",
        borderBottomWidth : 3,
        borderBottomColor : "white",
       
    },
    content : {
        flex : 0.7,
        
    },  
    footer  : {
        flex : 0.15,
        backgroundColor : "#FF7E1C",
        flexDirection : "row"
    },
    ContainerSearchBox:{
        margin : 20,
        justifyContent : "space-between",
     
        backgroundColor : "white",
        borderWidth : 1,
        borderColor : "#707070",
        borderRadius : 50,
        flexDirection :"row"
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