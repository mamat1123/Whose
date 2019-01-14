import React from 'react'
import {View , StyleSheet , Image , Text , TouchableOpacity} from 'react-native'
import key from '../../assets/key.png'
import card from '../../assets/card.png'
import wallet from '../../assets/wallet.png'
import phone from '../../assets/phone.png'
import other from '../../assets/other.png'
import user from '../../assets/user.png'
import {withRouter} from 'react-router-native'
class ItemCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            width : 0,
            height : 0,
        }
    }
    test(){
        console.log(this.props.postId)
    }
    render(){   
        let PictureModel = 'test'
        if(this.props.tag  == 1){
            PictureModel = key
            
        }
        else if(this.props.tag  == 2){
            PictureModel = card
            
        }
        else if(this.props.tag  == 3){
            PictureModel = wallet
            
        }
        else if(this.props.tag  == 4){
            PictureModel = phone
            
        }
        else if(this.props.tag  == 5){
            PictureModel = other
            
        }
        return (
            
            <TouchableOpacity style={styles.container}
            onPress={()=>this.test()}>
                <View style={{flex : 0.2 , flexDirection :"row" , margin : 5 }}>
                    <View>
                        <Image
                            style={{width : 40 , height : 40 , borderRadius : 20}}
                             source={user}
                        />
                    </View>
                    <View style={{justifyContent :"center" , alignItems :"center" , marginLeft : 5,}}>
                        <Text style = {{fontSize:20}}>{this.props.fname}</Text>
                    </View> 
                </View>
                <View 
                    onLayout={(layout) => this.setState({height : layout.nativeEvent.layout.height , width : layout.nativeEvent.layout.width})}
                    style={{flex : 0.6}}>
                    <Image 
                    style={{width : this.state.width , height : 300}}
                    source={PictureModel} />
                </View> 
                <View style={{flex : 0.2 , margin : 5}}>
                    <Text style = {{fontSize:20}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles= StyleSheet.create({
    container : {
        backgroundColor :"white",
        margin : 10,
        borderWidth :1,
        borderColor :"rgb(183,183,183)"
        
    }
})
export default withRouter(ItemCard)