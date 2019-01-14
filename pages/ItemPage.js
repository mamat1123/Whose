import React from 'react'
import {ScrollView,View , Text , TouchableNativeFeedback , TouchableOpacity , Picker , Alert , Dimensions} from 'react-native'
import ItemCard from '../component/Card/ItemCard'
import Icon from 'react-native-vector-icons/Feather';
import { ImagePicker } from 'expo';
import {withRouter} from 'react-router-native'
import Axios from 'axios';
import { DOMAIN } from '../constant/environment';
class ItemPage extends React.Component { 
    constructor(props){
        super(props)
        this.state={
            eventList : [],
            filterType : 0,
            image : "",
            PickerValue : ''
        }
    }
    componentDidMount(){
        if(this.state.filterType == 0 ){
            console.log('2')
            Axios.get(DOMAIN + '/post/found'+this.state.PickerValue)
                .then(result=>{
                    const data = result.data
                    const eventList = data.event
                    this.setState({eventList: eventList})
                    console.log(result)
                })
                .catch(err=>{
                    console.log(err.response)
                })

        }
        else if(this.state.filterType == 1 ){
            console.log('1')
            Axios.get(DOMAIN + '/post/find'+this.state.PickerValue)
                .then(result=>{
                    const data = result.data
                    const eventList = data.event
                    this.setState({eventList: eventList})
                    console.log(result)
                })
                .catch(err=>{
                    console.log(err.response)
                })

        }

    }
test1 = () =>{
    this.setState({filterType : 1})
    this.componentDidMount();
}

test2 = () =>{
    this.setState({filterType : 0})
    this.componentDidMount();
}
    // _pressImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes : ImagePicker.MediaTypeOptions.Images
    //     });
    //     console.log(result);
    
    //     if (!result.cancelled) {
    //       this.setState({ image: result.uri });
    //     }
    //   }
      async OnCreateFind() {
        this.props.history.push("/createfind")}
    render(){
        const {width , height} = Dimensions.get("window")
        const {eventList} = this.state
        let Events = eventList && eventList.length != 0 ? eventList.map(data=>
            <ItemCard
                postId={data.postId}
                title={data.title}
                fname={data.author.fName}
                datePost={data.datePost}
                tag={data.tag}

            />
        )
        :
        <View style={{display : "flex" , alignItems : "center" , padding : 20}}>  
            <Text style={{fontSize : 15}}> ไม่มีรายการที่จะแสดง </Text>
        </View>
        //console.warn(this.state.PickerValue)
        return (     
            <View style={{
              
            }}>
            
                <View style={{
                  
                    flex : 1,
                    height : 120,
                    justifyContent :"center"
                }}>
                    <View style={{justifyContent : "space-around" , flexDirection : "row" , alignItems :"center"}}>
                      <TouchableNativeFeedback
                      
                       onPress={()=>this.test2()}
                      >
                      <View style={this.state.filterType == 0? {
                        
                            backgroundColor :"#FF7E1C",
                            padding : 10,
                            borderRadius : 10, 
                            borderWidth : 2,
                            elevation:4,
                            shadowOffset: { width: 5, height: 5 },
                            shadowColor: "grey",
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                            borderColor :"white"
                          
                      } : {
                        backgroundColor :"white",
                        padding : 10,
                        borderRadius : 10, 
                        borderWidth : 2,
                        elevation:4,
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        borderColor :"white"
                      
                  }}>
                      <Text style={{  
                         color:this.state.filterType == 0 ? "white" : "black",
                         fontSize: 18 }}>ประกาศพบของหาย</Text>
                      </View>
                      
                      </TouchableNativeFeedback>
                      <TouchableNativeFeedback
                      
                         onPress={()=>this.test1()}
                      >
                         <View style={this.state.filterType == 1? {
                        
                        backgroundColor :"#FF7E1C",
                        padding : 10,
                        borderRadius : 10, 
                        borderWidth : 2,
                        elevation:4,
                        shadowOffset: { width: 5, height: 5 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        borderColor :"white"
                      
                  } : {
                    backgroundColor :"white",
                    padding : 10,
                    borderRadius : 10, 
                    borderWidth : 2,
                    elevation:4,
                    shadowOffset: { width: 5, height: 5 },
                    shadowColor: "grey",
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    borderColor :"white"
                  
              }}>
                      <Text style={{  
                           color:this.state.filterType == 1 ? "white" : "black",
                         fontSize: 18 }}>ประกาศตามหาของหาย</Text>
                      </View>
                      </TouchableNativeFeedback>
                    
                      
                     
                    </View>
                <View style={{
                  marginTop : 10,
                  marginBottom : 10
                }}>
                    <View style={{
                        flexDirection :"row",
                        justifyContent :"space-around",
                        alignItems :"center"
                    }}>
                    <View style={{
                        backgroundColor :"rgb(246,246,246)",
                        width: width / 1.2 , 
                    }}>
                    <Picker
                    mode="dropdown"
                     style={{ height: 40, }}
                     selectedValue={this.state.PickerValue}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerValue: itemValue})}
                    onPress={()=>this.componentDidMount()}
                   >
                    <Picker.Item label="ทั้งหมด" value="" />
                    <Picker.Item label="กุญแจ" value="key" />
                    <Picker.Item label="บัตร" value="card" />
                    <Picker.Item label="กระเป๋าสตางค์" value="wallet" />
                    <Picker.Item label="โทรศัพท์มือถือ" value="phone" />
                    <Picker.Item label="อื่นๆ" value="other" />
                    </Picker>
                    </View>
                        <TouchableOpacity
                        onPress={()=>this.props.history.push(this.state.filterType == 0 ? '/createfound':'/createfind' )}
                        > 
                        <View style={{
                            backgroundColor : "#FF7E1C",
                            borderRadius : 40,
                            padding :3
                        }}>                       
                            <Icon style={{fontSize : 35}} name="plus" color="black"
                            />
                        </View>
                        </TouchableOpacity>
                    </View>
                   
                </View>
                    
                </View>
                        {Events}
            </View>

        )
    }
}

export default withRouter(ItemPage)