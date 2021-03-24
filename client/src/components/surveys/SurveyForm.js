/*
* @Author: tianl
* @Date:   2021-03-21 18:16:59
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-22 00:28:25
*/
// <Field type="text" name="surveyTitle" component="input" />

//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field key={name} component={SurveyField} type="text" label={label} name={name} />
            );
        });
        // return(
        //     <div>
        //         <Field 
        //             label="Survey Title"
        //             type="text" 
        //             name="title" 
        //             component={SurveyField} 
        //         />
        //         <Field 
        //             label="Subject Line"
        //             type="text" 
        //             name="subject" 
        //             component={SurveyField} 
        //         />
        //         <Field 
        //             label="Email Body"
        //             type="text" 
        //             name="body" 
        //             component={SurveyField} 
        //         />
        //         <Field 
        //             label="Recipient List"
        //             type="text" 
        //             name="emails" 
        //             component={SurveyField} 
        //         />
        //     </div>
        // );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
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

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });


    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);


