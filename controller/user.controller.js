const UserServie = require('../services/user.service.js');
exports.register = (req , res) => {
    try {
        //req.body = รับค่า data มาจาก frontend
        const  { email , password } = req.body; //req.body.email , req.body.password
        const response = UserServie.registerUser(email , password);
        res.json({status: true, success: 'User registered successfully'}); //แสดงผลสถานะและข้อความกลับไปที่หน้าจอมือถือ
    } catch (err) {
        throw err;
    }
};

exports.login = (req , res) => {
    try {
        const { email , password } = req.body;
        if (!email || !password) {
            throw new Error('Parameters are not correct!')
        }

        let user = UserServie.checkUser(email);
        if (!user) {
            throw new Error('User does not exist!')
        }

        const isPasswordCorrect = user.comparePassword(password);
        if (isPasswordCorrectasswordc === false) {
            throw new Error('Username or Password does not match!');
        }
    } catch(err) {
        throw err;
    }
}