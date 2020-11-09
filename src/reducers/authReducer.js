import { FETCH_USER, SIGN_IN, SIGN_OUT,CREATE_USER } from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    userInfo: {uid: null, uname: null, uemail: null, id:null},
    userInfoFromRails: {}
};

export default (state = INITIAL_STATE, action) => {
   
switch (action.type) {
    case SIGN_IN:
        return {...state, isSignedIn: true, userInfo: action.payload};
     
        
        case SIGN_OUT:
            return {...state, isSignedIn: false, userInfo: null}; 
            case CREATE_USER: 
            return {...state, userInfoFromRails: action.payload}
         
              
            default: 
            return state;
          
}
};











// example code !!! not related to the application
// array based reducer 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const streamReducer = (state=[], action) => {
//     switch (action.type) {
//         case EDIT_STREAM: 
//         return state.map(stream =>{
//             if(stream.id === action.payload.id) {
//                 return action.payload;

//             }else {
//                 return stream
//             }
//         })
//         defualt: 
//         return state;
//     }
// }