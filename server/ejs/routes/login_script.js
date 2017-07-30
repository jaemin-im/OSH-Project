var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res) {
        res.send(req.body.user_name);
    })

    .post('/', function(req, res) {
        var sess;
        sess = req.session;

        fs.readFile(/*__dirname + */"../users/" + req.body.id, "utf8", function(err, data) {
            var user = JSON.parse(data);
            var pw = req.body.pw;

            if (pw == user.password) {
                sess.username = req.body.id;
                res.redirect('/certificate_list');
            } else {
                res.send('<script type="text/javascript">alert("회원정보가 올바르지 않습니다.");</script>');
                res.redirect('/login');
            }
        })
    });

module.exports = router;
