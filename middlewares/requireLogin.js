/*
* @Author: tianl
* @Date:   2021-03-18 01:13:27
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-18 01:16:39
*/
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!'});
    }

    next();
};