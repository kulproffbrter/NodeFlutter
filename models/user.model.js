const db = require('../config/db.js');
const bcrypt = require('bcrypt'); //เป็น library ในการเข้ารหัส
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email : {
        type: String,
        lowercase: true,
        require: [true, "Username can't be empty" ],
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 
            "Username format is not correct!"
        ],
        unique: true
    },
    password : {
        type: String,
        require: [true, "password is required"]
    }
    
},{timestamps: true});

//ใช้ในการๅบันทึกรหัสผ่าน
userSchema.pre('save' , async function(){
    var user = this;
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    } catch(error) {
        throw error;
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
};

const UserModel = db.model('user', userSchema);
module.exports = UserModel;