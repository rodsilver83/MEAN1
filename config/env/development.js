/**
 * Created by Rodrigo on 2/17/16.
 */
module.exports = {
  //Development configuration options
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '1200062096726267',
    clientSecret: '7a05e6c1adbc41df44dd10888c0eeffd',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  }
};