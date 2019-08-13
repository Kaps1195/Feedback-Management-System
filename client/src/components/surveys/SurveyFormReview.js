// SurveyFormReview shows users their form inputs for review
import React from 'react'
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    
    const fieldList = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>     
        );
    });

    return(
        <div>
            <h5>Please confirm your entries!</h5>
            {fieldList}
            <div style={{ marginTop: '20px' }}>
                <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
                    Back
            </button>
                <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                    Send Survey
               <i className="material-icons right">email</i>
                </button>
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));