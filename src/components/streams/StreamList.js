import React from 'react';
import { connect } from 'react-redux'
import { fetchStreams} from '../../actions';
import { Link } from 'react-router-dom'


class StreamList extends React.Component {

componentDidMount(){
 
    
    this.props.fetchStreams();
   
}


renderAdmin(stream) {

    if(stream.user_id === this.props.CurrentUserId) {
        return (
            <div className="right floated content">
<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
    edit
</Link>
<Link to={`/streams/delete/${stream.id}`} className="ui button negative">
    delete
</Link>

            </div>
        )
    }
}

showLive(stream) {
   
    if(!(stream.user_id === this.props.CurrentUserId)  &&  this.props.isSignedIn)
    return(
        
        <div className="ui green tiny header">
            User is online
            <div><i class="video icon"></i></div>
            
            </div>
            
    )

 
}
      
renderList() {
    
    return this.props.streams.map(stream => {
        return(
            <div className="item" key={stream.id}>
                 {this.renderAdmin(stream)}
                <i className="large middle aligned icon camera"/>
                <div className="content">
                    <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                    <div className="description">{stream.description}</div>
                    {this.showLive(stream)}
                </div>
               
            </div>
        )
    })
}


renderCreate() {
    if (this.props.isSignedIn){
        return (

            <div>
               <Link to="/streams/new" className="ui button primary"> 
                     Create Stream
                </Link>

            </div>
        )
    }
}




    render() {
     
        return (
        
        <div> 
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
        </div>
        
        )
    }
}

const mapStateToProps = (state) => {
return {
    streams: Object.values(state.streams),
    CurrentUserId: state.auth.userInfoFromRails.id,
    isSignedIn: state.auth.isSignedIn
}
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);