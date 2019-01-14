import React from 'react'
import {connect} from 'react-redux'
import {Redirect , withRouter} from 'react-router-native'
export default function AuthComponent(WrappedComponent){
    function mapStateToProps(state){
        return {
            token : state.userReducer.token
        }
    }
    return withRouter(connect(mapStateToProps)(class MyAuthComponent extends React.Component{
        render(){
            if(this.props.token) return <WrappedComponent {...this.props} />
            else return <Redirect to="/"/>
        }
    }))
}