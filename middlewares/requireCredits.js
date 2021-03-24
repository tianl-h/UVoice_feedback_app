/*
* @Author: tianl
* @Date:   2021-03-20 22:31:16
* @Last Modified by:   tianl
* @Last Modified time: 2021-03-20 22:40:33
*/
module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits!'});
    }

    next();
};