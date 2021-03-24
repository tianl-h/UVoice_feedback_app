/*
* @Author: tianl
* @Date:   2021-03-20 22:13:03
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-21 10:55:17
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;