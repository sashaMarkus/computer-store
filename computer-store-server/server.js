const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 1080;
const usersBl = require('./users-bl');
const userModel = require('../computer-store/src/app/models/user.model');

app.use(bodyParser.json());
app.use(cors());

app.get('/users', (req, res) => {
    usersBl.getUsers((err, allUsers) => {
        if (err) {
            return res.status(500).send();
        } else {
            return res.send(allUsers);
        }
    })
})

app.post('/users', (req, res) => {
    console.log('im working');
    const userToAdd = req.body;
    //userToAdd.id = Number(userToAdd.id);
    const newUserToAdd = new userModel.User(0,userToAdd.firstName, userToAdd.lastName, userToAdd.email, userToAdd.password, userToAdd.city, userToAdd.street, userToAdd.role);
    usersBl.createOneUser(newUserToAdd, (err ) => {
        if (err) {
            return res.status(500).send();
        }
        else {
            return res.send(newUserToAdd);
        }
    })
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT || PORT}!`);
})