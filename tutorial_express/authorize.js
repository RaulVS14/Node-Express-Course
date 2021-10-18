const {people} = require('./mock_db')
const authorize = (req, res, next) => {
    console.log('authorize');
    const {user} = req.query;
    const db_user = people.find((user_obj) => user_obj.name === user);
    if (db_user) {
        req.user = {name: 'Bruce', id: 3};
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}
module.exports = authorize;
