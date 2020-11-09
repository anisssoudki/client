import {GET_VIDEOS, GET_YOUTUBEDATA}  from '../actions/types'
import _ from 'lodash';




export default  (state = {}, action) => {
    switch (action.type) {
        case GET_YOUTUBEDATA:
            return {...state,  q: action.payload};
           case GET_VIDEOS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
           default: 
           return state;
         
              
            }
        };
        