/*
* @Author: tianl
* @Date:   2021-03-21 17:20:22
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-24 11:12:11
*/
import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;