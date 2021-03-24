/*
* @Author: tianl
* @Date:   2021-03-21 18:44:03
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-21 23:25:02
*/
// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px'}}>
                {touched && error}
            </div>
        </div>
    );
};