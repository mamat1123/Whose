const initialState={
    token :""
}
export default function reducer(state=initialState , action){
    switch(action.type){
        case "LOGIN_SUCCES":
        return {
            token : action.token
        }
        
        default :
        return state
    }
}