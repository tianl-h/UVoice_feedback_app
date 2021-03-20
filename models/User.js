/*
* @Author: tianl
* @Date:   2021-03-15 11:40:46
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-18 01:03:04
*/
const mongoose = require('mongoose');

// The same as const Schema = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

// Will not overite existing keys, only create when it does not exist
mongoose.model('users', userSchema);