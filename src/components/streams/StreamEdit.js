import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions'
import { Field, reduxForm } from 'redux-form'

class StreamEdit extends React.Component {

    componentDidMount() {
       this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
     }
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>

                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
//   console.log(meta)
const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return(
        <div className={className}>
            <label>{label}</label>
          
         <input id={this.props.userId}  {...input} autoComplete="off"/>
        
        <div>{this.renderError(meta)}</div>
       
        </div>
        )}


    render() {
        console.log(this.props);
        if(!this.props.stream) {
            return <div>loading....</div>
        }
    return <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}  className="ui form error">
           
           <Field name="title" component={this.renderInput}  label="Enter Title"/> 
           <Field name="description" component={this.renderInput} label="Enter Description"/> 
        
      
        
           <button className="ui button primary">Submit</button>   
          </form>
        </div>

    }
}




const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }
    return errors;
}




const mapStateToProps = (state, ownProps) => {
    // console.log(state, ownProps)
    return { stream: state.streams[ownProps.match.params.id] };
}




const formWrapped =  reduxForm({
    form: 'streamEditeForm',
    validate
}) (StreamEdit);


export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(formWrapped)