/*
* @Author: tianl
* @Date:   2021-03-17 11:09:22
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-17 23:59:58
*/
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name='Emaily'
                description="$5 for 5 email credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}


export default connect(null, actions)(Payments);