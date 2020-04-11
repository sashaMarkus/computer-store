const dal = require('./dal');
const userModel = require('../computer-store/src/app/models/user.model');
const table = 'users';

function getUsers(callback) {
    dal.readAll(`select * from ${table} order by id`, (err, allUsers) => {
        allUsers.map(element => {
            return new userModel.User(element.id, element.first_name, element.last_name, element.email, element.password, element.city, element.street, element.role);
        })
        if(err) {
            callback(err);
        } else {
            callback(null, allUsers);
        }
    })
}

module.exports = {
    getUsers: getUsers
}