/*
* @Author: tianl
* @Date:   2021-03-14 16:43:52
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-16 01:07:16
*/

// const authRoutes = require('./routes/authRoutes');
// const passportConfig = require('./services/passport');

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);
// const db = require('./config/keys').mongoURI;
// mongoose.connect(db, { useNewUrlParser: true });

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// app.get('/', (req, res) => {
//     res.send({bye: 'buddy'});
// });

//google has an internal identifier of googleStrategy


// UPPER CASE denot cannot be changed in the future
const PORT = process.env.PORT || 5000;
app.listen(PORT);


// localhost:5000