import React from 'react';
import { connect } from 'react-redux';
import {  getYoutube } from '../actions';
import { Field, reduxForm } from 'redux-form'

class SearchBar extends React.Component {

    

    renderInput = ({ input, label }) => {
      
                return(
               <div>
                    <label>{label}</label>
                    <input {...input} autoComplete="off"/>
                 </div>
                )}
            onSubmit = (formValues) => this.props.getYoutube(formValues) 



          


    render() {
        // console.log(this.props)
       return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui category search">
       <Field name="q" component={this.renderInput} label="Search Videos"/> 
       <button className="ui button primary">Submit</button>   
      </form>
   
    )
    
    }
    
}




const formWrapped =  reduxForm({
    form: 'getYoutube'
})(SearchBar);



    export default connect(null, { getYoutube } )(formWrapped);
   