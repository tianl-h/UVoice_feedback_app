/*
* @Author: tianl
* @Date:   2021-03-16 20:24:35
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-21 19:33:01
*/
import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// dummy Header: const Header = () => <h2>Header</h2>
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            // <div className="container">
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
            // </div>
        );
    }
}

export default connect(null, actions)(App);