import React from 'react';
import { connect } from 'react-redux'
import {  getVideos } from '../../actions';
import { Link } from 'react-router-dom'


class YoutubeList extends React.Component {

componentDidMount(){
 
 
    this.props.getVideos();
   
}





renderList() {
    console.log(this.props.videos)
    return this.props.videos.map(video => {
        return(
            <div className="item" >
                
                <i className="large middle aligned icon youtube"/>
                <div className="content">
                    {video.id} 
                    {video.items.reverse().map(item => {
                        
                        return(
                           
                            <div className="item" >

                       
                              <a className="header" href={`https://www.youtube.com/watch?v=${item.id.videoId} `} target={`https://www.youtube.com/watch?v=${item.id.videoId} `}> {item.snippet.title} </a> 
                             <img className="avatar" src={item.snippet.thumbnails.medium.url}/>
                                </div>
                            
                   )} 
                    )}
                </div>
               
            </div>
        )
    })
}







    render() {
     
        return (
        
        <div> 
        <h2>Videos</h2>
        <div className="ui list">{this.renderList()}</div>
        
        </div>
        
        )
    }
}

const mapStateToProps = (state) => {
   
    return {
        videos: Object.values(state.videos)
       
    }
}

export default connect(mapStateToProps, { getVideos })(YoutubeList);