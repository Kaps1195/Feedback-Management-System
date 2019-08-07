// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const FIELDS = [
    {label: 'Subject Title', name: 'title'},
    {label: 'Subect Line', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recipient List', name: 'emails'}
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        });
    };
    
    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(values => {console.log(values)})}>
                    { this.renderFields() }
                    <Link to="/surveys" className="red btn-flat left white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="#304ffe indigo accent-4 btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};    

    _.each(FIELDS, ({ name }) => {
        if(!values[name]) {
            errors[name] = 'You must provide a value'
        }
    })

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);