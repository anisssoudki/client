import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createStream } from '../../actions'



class StreamCreate extends React.Component  {
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

onSubmit = (formValues) => {
   this.props.onSubmit(formValues)
}

    render() {
console.log(this.props)
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
         <h1> Create a new Stream </h1> 
        <div className='ui huge header'>
       <Field name="title" component={this.renderInput} label="Enter Title"/> 
       <Field name="description" component={this.renderInput} label="Enter Description"/> 
    
       </div>
      
       <button className="ui button primary">Submit</button>   
      </form>
    )
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


const formWrapped =  reduxForm({
    form: 'streamCreateForm',
    validate
}) (StreamCreate);


export default connect(
    null,
    { createStream }
)(formWrapped)