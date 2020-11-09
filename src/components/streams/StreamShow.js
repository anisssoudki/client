import React from 'react';
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'


class StreamShow extends React.Component {

    componentDidMount() {
  
    this.props.fetchStream(this.props.match.params.id)
}


  render() {
      if (!this.props.stream) {
          return <div>Loading...</div>
      }
      return(
           <div>
          <h1 className="ui blue header">{this.props.stream.title}</h1>     
          <h4 className="ui segment">{this.props.stream.description}</h4>  
           </div>
      )
  }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
    };

export default connect(mapStateToProps, {fetchStream}) (StreamShow);