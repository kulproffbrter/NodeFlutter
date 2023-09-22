const express = require("express");
const app = express();
const PORT = 3000;
const db = require('./config/db.js');

//const UserModel = require('../models/user.model.js');
const UserRoute = require('./routes/user.routes.js');

app.use(express.json());

app.use(express.urlencoded({extended: true}));

// http://localhost:3000
// () => {}; It's function

// get = รับค่า
// post = ส่งค่า
app.get("/", (req , res)=>{
    res.send('Welcome to Back-office');
});

app.use("/", UserRoute);

app.listen(PORT , ()=>{
    console.log('Server run at http://localhost:'+ PORT);
});