import React from 'react';
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'
import flv from 'flv.js'

class StreamShow extends React.Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
     
        console.log(this.videoRef)
    this.props.fetchStream(this.props.match.params.id);
   this.buildPlayer();
}

componentDidUpdate() {
    this.buildPlayer();
}

componentWillUnmount(){
    this.player.destroy()
}


buildPlayer() {
    if (this.player || !this.props.stream) {
        return;
    }
    const { id } = this.props.match.params
    this.player = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
}

  render() {
      if (!this.props.stream) {
          return <div>Loading...</div>
      }
      
      return(
           <div>
              
          <h1 className="ui blue header">{this.props.stream.title}</h1>    

          <video ref={this.videoRef} style={{width: '50%'}} controls={true}/> 

          <h4 className="ui segment">{this.props.stream.description}</h4>  
          
           </div>
      )
  }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
    };

export default connect(mapStateToProps, {fetchStream}) (StreamShow);