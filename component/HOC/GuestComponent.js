import React from 'react'
import {connect} from 'react-redux'
import {Redirect ,withRouter} from 'react-router-native'
export default function GuestComponent(WrappedComponent){
    function mapStateToProps(state){
        return {
            token : state.userReducer.token
        }
    }
    return withRouter(connect(mapStateToProps)((class MyGuestComponent extends React.Component{
        render(){            
            if(this.props.token) return <Redirect to="/ItemPage"/>
            else return <WrappedComponent  {...this.props}/>
        }
    })))
}