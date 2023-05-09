const router = require("express").Router();
// const { loginCheck, isAuth, isAdmin } = require("../middleware/auth");



const {
    PaymentSuccess,

} = require('../controller/payment.ctrl');

router.post('/PaymentMessage', PaymentSuccess);



module.exports = router