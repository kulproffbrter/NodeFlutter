const router = require('express').Router();
const Usercontroller = require('../controller/user.controller.js');

router.post("/register", Usercontroller.register);
router.post("/login", Usercontroller.login);

module.exports = router;