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

exports.login = async (req , res) => {
    try {
        const { email , password } = req.body;
        if (!email || !password) {
            throw new Error('Parameters are not correct!')
        }

        let user = await UserServie.checkUser(email);
        if (!user) {
            throw new Error('User does not exist!')
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if (isPasswordCorrect === false) {
            throw new Error('Username or Password does not match!');
        }

        let tokenData;
        tokenData = {_id: user._id, email: user.email };

        res.status(200).json({status : true , success: 'send Data' , token: ''  });
    } catch(err) {
        throw err;
    }
}