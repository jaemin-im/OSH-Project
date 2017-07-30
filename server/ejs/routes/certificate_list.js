var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('certificate_list');
});

module.exports = router;
