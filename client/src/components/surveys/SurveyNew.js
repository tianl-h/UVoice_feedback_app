/*
* @Author: tianl
* @Date:   2021-03-21 18:11:45
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-22 00:05:11
*/
// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { new: true };
    // }

    state = { showReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <SurveyFormReview 
                    onCancel={() => this.setState({ showFormReview: false })}
                />
            );
        }

        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);