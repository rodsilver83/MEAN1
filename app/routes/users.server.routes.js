/**
 * Created by Rodrigo on 3/11/16.
 */
var users = require('../../app/controllers/users.server.controller'),
  passport = require('passport');
module.exports = function(app) {
  app.route('/signup')
    .get(users.renderSignup)
    .post(users.signup);
  app.route('/signin')
    .get(users.renderSignin)
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: true
    }));
  app.get('/signout', users.signout);

  app.route('/users')
    .post(users.create)
    .get(users.list);

  app.route('/users/:userId')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);

  app.param('userId',users.userByID);

  app.get('/oauth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/signin'
  }));
  app.get('/oauth/facebook/callback', passport.authenticate('facebook',
    {
      failureRedirect: '/signin',
      successRedirect: '/'
    }));
};

