var express = require('express');
var router = express.Router();
var passport = require('passport');

function ensureAuthenticated(req, res, next){

  if (req.isAuthenticated()){

    return next(); }

  res.redirect('/')
}

router.get('/', function(req, res) {
  res.render('index', { title: 'Meu exercício' });

});
  router.get('/auth/github', 
  passport.authenticate('github'));

  router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req,res) {

    res.redirect('/admin');
 
   

    
});

module.exports = router;