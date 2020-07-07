var express = require('express');
const { ensureAuthentication } = require('../configs/ensureAuthentication');
var router = express.Router();

router.get('/login', ensureAuthentication, function(req, res, next){

    res.render('admin');
});

module.exports = router;