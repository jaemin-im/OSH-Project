var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send(req.body.user_name);
});

router.post('/', (req, res) => {
    /*var name = req.body.user_name;
    var email = req.body.email;
    var password = req.body.pw;
    var password_check = req.body.pw_check;
    var telephone = req.body.phone;*/
    res.send(req.body.email);
});

module.exports = router;
