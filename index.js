/*
* @Author: tianl
* @Date:   2021-03-14 16:43:52
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-14 20:15:21
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

// UPPER CASE denot cannot be changed in the future
const PORT = process.env.PORT || 5000;
app.listen(PORT);


// localhost:5000