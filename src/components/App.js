import React from 'react';
import {
    Router,
    Switch,
    Route
  } from "react-router-dom";
// import { useSelector } from 'react-redux'

import StreamCreate from './streams/StreamCreate';

import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header'
import history from '../history'
import YoutubeList from './youtubes/YoutubeList';
const App = () => {

//  const userId = useSelector(state => state.auth.userInfoFromRails.id)

    return (
        <div>
       


        <Router history={history}>
        <Header />
            <Switch>
            <Route path="/" exact component={StreamList}/>
              
               
           
              <Route path="/youtubes" exact component={YoutubeList}/>  
           
              
              <Route path="/streams/new" exact component={StreamCreate}/>
             
           
              <Route path="/streams/edit/:id" exact component={StreamEdit}/>
             
            
              <Route path="/streams/:id" exact component={StreamShow}/>
          
              
              <Route path="/streams/delete/:id" exact component={StreamDelete}/>
              
              
            </Switch>
           
        </Router>
     
        </div>
      );
    }



export default App;