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
    usersBl.getUsers((err,allUsers) =>{
        if(err) {
            return res.status(500).send();
        } else {
            return res.send(allUsers);
        }
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT || PORT}!`);
})