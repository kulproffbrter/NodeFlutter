const UserModel = require('../models/user.model.js');

//Service ทำหน้าที่ insert
class UserServie {
    static registerUser(email , password){
        try {
            const createUser = new UserModel({email , password});
            return createUser.save();
        } catch(err){
            throw err; 
        }
    }

    static checkUser(email) {
        try {
            return UserModel.findOne({email});
        } catch (err) {
            throw err;
        }
    }

}

module.exports = UserServie;