const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb+srv://kulpriya:sawaddee555@cluster0.lbiisx0.mongodb.net/ToDoDB`)
    .on('open',() => {
        console.log("MongoDB Connected");
    })
    .on('error', () => {
        console.log("MongoDB Connection error!!");
    });

module.exports = connection;