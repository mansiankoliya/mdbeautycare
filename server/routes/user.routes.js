const router = require("express").Router();


const {

    // register
    forgetPassword,
    verifyOtp,
    newPassword


} = require('../controller/user.ctrl');

// router.post('/register', register);
router.put('/forgetPassword', forgetPassword);
router.put('/verifyOtp/:email', verifyOtp)
router.put('/newPassword/:email', newPassword);

module.exports = router