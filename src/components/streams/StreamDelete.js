import React from 'react';
import { connect } from 'react-redux'
// import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom'
class StreamDelete extends React.Component  {
 
    componentDidMount() {

    this.props.fetchStream(this.props.match.params.id)

}

render() 

{
    // console.log(this.props.stream.id)
        return (
            <div>
                <h1>
                {this.props.stream.title} 
                </h1>
             
                <div>
                Are you sure you want to delete?
                </div>
                <Link to ="/">
            <button onClick={() => this.props.deleteStream(this.props.stream.id)} 
           
            className="ui button negative">
            Delete Stream
            </button>
            <Link to ="/" className="ui button primary">Cancel</Link>
            </Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, {fetchStream, deleteStream}) (StreamDelete);