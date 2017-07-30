var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('i_did_it', { word1: '쉬벨럼', word2: '개쉬끼' });
});

module.exports = router;
