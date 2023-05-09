const router = require("express").Router();
// const { loginCheck, isAuth, isAdmin } = require("../middleware/auth");



const {
 
    InsertSubscriber
} = require('../controller/payment.ctrl');

// router.post('/PaymentMessage', loginCheck ,PaymentSuccess);
router.post('/InsertSubscriber', InsertSubscriber)


module.exports = router