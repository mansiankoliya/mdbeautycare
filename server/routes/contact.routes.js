const router = require("express").Router();
// const {verify} = require('../middleware/auth');

const {

    contactInsert

} = require('../controller/contact.ctrl');

router.post('/insert', contactInsert);

module.exports = router;