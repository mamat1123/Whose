import React from 'react'
import {View,StyleSheet,Text,Image,Button,TextInput,Picker,TouchableOpacity,Alert} from 'react-native'
import { ImagePicker } from 'expo';
import key from '../assets/key.png'
import card from '../assets/card.png'
import wallet from '../assets/wallet.png'
import phone from '../assets/phone.png'
import other from '../assets/other.png'
import {withRouter} from 'react-router-native'
import axios from 'axios'
import { DOMAIN } from '../constant/environment';
class CreateItemFindPage extends React.Component{
    constructor(){
        super()
        this.state={
            title: "",
            PickerValue:key,
            detail:'',
            userID:'',
            post:'2'
    }
}

async onSubmit(){
    try{
      axios.post(DOMAIN + "/post" , 
      {title : this.state.title , tag : this.state.PickerValue-1,detail : this.state.detail,userID:'5c155c28135b380016c233f0', post : this.state.post})
      this.props.history.push("/ItemPage")
      
    }catch(err){
      console.log(err)
      //console.warn("Post Failed")
    }
    
  }
    onChangeText(text, field) {
        this.setState({ [field]: text });
      }

    onPickPicture(selectedValue) {
        if(selectedValue == "key"){
            this.setState({visible : key , modalVisible : !this.state.modalVisible,selectedValue :"key",})
        }
        else if (selectedValue == "card"){
            this.setState({visible : card , modalVisible : !this.state.modalVisible,selectedValue :"card"})
         }
         else if (selectedValue == "wallet"){
            this.setState({visible : wallet , modalVisible : !this.state.modalVisible,selectedValue :"wallet"})
         }
         else if (selectedValue == "phone"){
            this.setState({visible : phone , modalVisible : !this.state.modalVisible,selectedValue :"phone"})
         }
         else if (selectedValue == "other"){
            this.setState({visible : other , modalVisible : !this.state.modalVisible,selectedValue :"other"})
         }
    }
    onSubmit(){
        if (this.state.title=='' || this.state.detail==''){
            Alert.alert('โปรดกรอกข้อมูลให้ครบถ้วน')
        }
        else{            
            try{
                Alert.alert('สร้างโพสต์สำเร็จ!')
                axios.post(DOMAIN + "/post" , 
                {title : this.state.title , tag : this.state.PickerValue-1,detail : this.state.detail,userID:'5c155c28135b380016c233f0', post : this.state.post})
                this.props.history.push("/ItemPage")
                
              }catch(err){
                console.log(err)
                //console.warn("Post Failed")
              }
            }
        }
    render(){
        //console.warn(this.state.PickerValue)
        const { selection } = this.state;
        return( 
            <View style={styles.container}>
            <View style={styles.header}>    
            <View style={{marginTop:30}}>
            
            <Text style={{fontSize:30,color:'white',marginBottom:-25}}>สร้างโพสต์ตามหาของหาย</Text>  

            <TouchableOpacity
            onPress={()=>this.props.history.push('/ItemPage')}>
                <Image style= {{height:30,width:30,marginLeft:'auto',marginTop:-10}} 
                                    source={require('../assets/delete.png')}></Image>
            </TouchableOpacity>
                                               
            </View>
            </View>
                        <View style={styles.body}>     
                        <Text style={{fontSize:22,color:'black',marginTop:10,marginButtom:10}}>หัวข้อ* :</Text>
                        <TextInput
                    style={{height: 40,width:'80%',color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:75,marginRight:'auto',
                    marginTop:'auto',marginBottom:10,borderWidth : 1,borderColor :"#FF8000",padding:10
                    }}
                    onChangeText={(text) => this.onChangeText(text, 'title')}
                />   
                    <View style={{
                        backgroundColor :"rgb(246,246,246)",
                        width: 240 ,marginLeft:80,marginRight:'auto',marginTop: 10,marginBottom:'auto' 
                    }}>
                    <Picker
                    mode="dropdown"
                     style={{ height: 40, }}
                     selectedValue={this.state.PickerValue}
                    onValueChange={(itemValue, itemIndex) => this.setState({PickerValue: itemValue})}
                    
                   >
                    <Picker.Item label="กุญแจ" value= {key} />
                    <Picker.Item label="บัตร" value={card} />
                    <Picker.Item label="กระเป๋าสตางค์" value={wallet} />
                    <Picker.Item label="โทรศัพท์มือถือ" value={phone} />
                    <Picker.Item label="อื่นๆ" value={other} />
                    </Picker>
                    </View>
                        <Text style={{fontSize:22,color:'black',marginTop:5,marginBottom:10}}>ประเภท :</Text>            
                        </View>
                    <View>   
            </View>
            <View style={styles.detailbox}>
            <Image
                style={{height:110,width:110}}
                source={this.state.PickerValue}
                >
            </Image>

            </View>
            <View style={styles.detailbox2}> 
            <Text style={{fontSize:22,color:'black',marginTop:10,marginButtom:10}}>รายละเอียด* :</Text>
            <TextInput
                    style={{height: 120,width:320,color:'gray',
                    backgroundColor:'white',borderRadius : 30,marginLeft:'auto',marginRight:'auto',
                    marginBottom:'auto',borderWidth : 1,borderColor :"#FF8000",padding:10 
                    }}
                    onChangeText={(text) => this.onChangeText(text, 'detail')}
                />         
                 <View style={{height: 65,width:110,marginLeft:215,marginBottom:-25 }}>
                <Button
                  title="โพสต์!"
                  color="#FF8000"
                  accessibilityLabel="โพสต์!"
                  onPress={()=>this.onSubmit()}
                />
                </View>                    
            </View>
        </View>
    );
}
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF1D9',
        flex:1,
        justifyContent: 'center'
    },
    header: {
        height: 60,
        backgroundColor: '#FF8000',
        justifyContent: 'center',
        padding : 10           
      },
    body:{
        flex:1,
        backgroundColor:'#FFE1B0',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding : 20,
        borderWidth : 3,
        borderColor :"#FF8000"
    },
    detailbox:{
        height: 150,
        backgroundColor: '#FFF1D9',
        alignItems: 'center',
        padding : 20,
        borderWidth : 3,
        borderColor :'#FF8000'
        },
    detailbox2:{
        height: 230,
        backgroundColor: '#FFE1B0',
        padding : 10,
        borderWidth : 3,
        borderColor :'#FF8000'
    }
    })
    export default withRouter(CreateItemFindPage)