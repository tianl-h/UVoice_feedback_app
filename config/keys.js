/*
* @Author: tianl
* @Date:   2021-03-14 23:18:06
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-15 23:29:37
*/
// figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys!!!
    module.exports = require('./dev');
}