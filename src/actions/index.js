import { SIGN_IN,
     SIGN_OUT,
        CREATE_STREAM,
        CREATE_USER,
        FETCH_USER,
        FETCH_STREAM, 
        FETCH_STREAMS, 
        DELETE_STREAM,
        EDIT_STREAM,
        GET_YOUTUBEDATA,
        GET_VIDEOS
    } from './types'

import youtube from '../apis/youtube'
import videos from '../apis/videos'
import history from '../history'
import streams from '../apis/streams'
import users from '../apis/users'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';






export const signIn = (userInfo) => {
   
    return {
        type: SIGN_IN,
        payload:  userInfo
    };
    
};

export const fetchUser = (id) => async dispatch => {
  
    const response = await users.get(`/users/${response.data.id}`, id);
    dispatch ({type: FETCH_USER, paylpad: response.data})
   
}
export const createUser = (userInfo) => async dispatch => {
   
    const response = await users.post('/users', userInfo);
   
    dispatch  ({ type: CREATE_USER, payload: response.data });
    history.push('/')
}


export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};


export const createStream = formValues => async (dispatch, getState) => {
   console.log(getState().auth.userInfoFromRails.id)
const user_id = getState().auth.userInfoFromRails.id

   const response = await streams.post('/streams', { ...formValues, user_id });

    dispatch({ type: CREATE_STREAM, payload: response.data });
    //  do some navigation to return user to root route
   history.push('/')
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    // console.log(response)
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  
};

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data })
};

export const editStream = (id, formValues) => async (dispatch, getState) => {
    const user_id = getState().auth.userInfoFromRails.id
    const response = await streams.patch(`/streams/${id}`, { ...formValues, user_id })
    dispatch({ type: EDIT_STREAM, payload: response.data })
    console.log(response.data)
    history.push('/')
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id});
};

export const getYoutube = (formValues) => async (dispatch) => {

    const response = await youtube.get("/search", {

        params: {
            q: (formValues.q)
        }
    }) 
   
    dispatch ({ type: GET_YOUTUBEDATA, payload: response.data})
    history.push('/youtubes')
    // console.log(response.data)
    await videos.post("/videos", {...response.data})
    }
    export const getVideos = () => async dispatch => {
        const response = await videos.get('/videos');
        
        dispatch({ type: GET_VIDEOS, payload: response.data });
      console.log(response.data)
    };