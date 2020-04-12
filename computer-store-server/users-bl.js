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

function createOneUser(userToAdd, callback) {
    console.log('works');
    console.log(userToAdd);
    //const userToAdd = {id, first_name, last_name, email, password, city, street, role};
    const query =`insert into ${table} (first_name, last_name, email, password, city, street, role) values 
    ('${userToAdd.firstName}', '${userToAdd.lastName}', '${userToAdd.email}', '${userToAdd.password}', '${userToAdd.city}', '${userToAdd.street}', ${userToAdd.role})`
    console.log(query);
    dal.createOne(query, (err) => {
        if(err){
            callback(err);
        }else {
            callback(null);
        }
    })
}

function getOneUser(){
    
}
module.exports = {
    getUsers: getUsers,
    createOneUser: createOneUser
}