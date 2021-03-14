/*
* @Author: tianl
* @Date:   2021-03-14 16:43:52
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-14 17:00:37
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.listen(5000);


// localhost:5000